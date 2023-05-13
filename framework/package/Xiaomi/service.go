package Xiaomi

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/binary"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math/rand"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"
)

// GenerateDeviceId 生成随机DeviceId
func GenerateDeviceId() string {
	stringData := ""
	candidates := strings.ToLower("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
	for i := 0; i < 6; i++ {
		index := rand.Intn(len(candidates))
		stringData += string(candidates[index])
	}
	return stringData
}

// GenerateAgentId 生成随机AgentId
func GenerateAgentId() string {
	stringData := ""
	candidates := "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	for i := 0; i < 13; i++ {
		index := rand.Intn(len(candidates))
		stringData += string(candidates[index])
	}
	return stringData
}

// ServiceLogin 获取登录所需的_sign信息
func ServiceLogin(DeviceId string, AgentId string) returnServiceLogin {

	serviceLoginUrl := "https://account.xiaomi.com/pass/serviceLogin?sid=xiaomiio&_json=true"
	serviceLoginRequest, _ := http.NewRequest(http.MethodGet, serviceLoginUrl, nil)
	serviceLoginRequest.Header = make(http.Header)
	serviceLoginRequest.Header["User-Agent"] = []string{fmt.Sprintf("Android-7.1.1-1.0.0-ONEPLUS A3010-136-%s APP/xiaomi.smarthome APPV/62830", AgentId)}
	serviceLoginRequest.AddCookie(&http.Cookie{Name: "sdkVersion", Value: "3.8.6"})
	serviceLoginRequest.AddCookie(&http.Cookie{Name: "deviceId", Value: DeviceId})
	serviceLoginResponse, _ := http.DefaultClient.Do(serviceLoginRequest)
	serviceLoginBody, _ := ioutil.ReadAll(serviceLoginResponse.Body)
	serviceLoginModel := returnServiceLogin{}
	json.Unmarshal(serviceLoginBody[11:], &serviceLoginModel)

	return serviceLoginModel
}

// ServiceLoginAuth 授权登录
func ServiceLoginAuth(username string, password string, Sign string, DeviceId string, AgentId string) returnServiceLoginAuth {

	serviceLoginAuth2Url := "https://account.xiaomi.com/pass/serviceLoginAuth2?_json=true"
	form := url.Values{}
	form.Add("sid", "xiaomiio")
	form.Add("hash", password)
	form.Add("callback", "https://sts.api.io.mi.com/sts")
	form.Add("qs", "%3Fsid%3Dxiaomiio%26_json%3Dtrue")
	form.Add("user", username)
	form.Add("_json", "true")
	form.Add("_sign", Sign)
	serviceLoginAuthRequest, _ := http.NewRequest(http.MethodPost, serviceLoginAuth2Url, strings.NewReader(form.Encode()))
	serviceLoginAuthRequest.Header.Add("User-Agent", fmt.Sprintf("Android-7.1.1-1.0.0-ONEPLUS A3010-136-%s APP/xiaomi.smarthome APPV/62830", AgentId))
	serviceLoginAuthRequest.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	serviceLoginAuthRequest.AddCookie(&http.Cookie{Name: "deviceId", Value: DeviceId})
	serviceLoginAuthRequest.AddCookie(&http.Cookie{Name: "pass_ua", Value: "web"})
	serviceLoginAuthRequest.AddCookie(&http.Cookie{Name: "sdkVersion", Value: "3.8.6"})
	serviceLoginAuthRequest.AddCookie(&http.Cookie{Name: "uLocale", Value: "zh_CN"})
	serviceLoginAuthRequest.AddCookie(&http.Cookie{Name: "userId", Value: username})
	serviceLoginAuthClient := &http.Client{}
	serviceLoginAuthResponse, _ := serviceLoginAuthClient.Do(serviceLoginAuthRequest)
	serviceLoginAuthBody, _ := ioutil.ReadAll(serviceLoginAuthResponse.Body)
	serviceLoginAuthModel := returnServiceLoginAuth{}
	json.Unmarshal(serviceLoginAuthBody[11:], &serviceLoginAuthModel)

	return serviceLoginAuthModel
}

// ServiceToken 获取接口请求所需的serviceToken
func ServiceToken(serviceLoginAuth returnServiceLoginAuth) *http.Response {
	serviceTokenRequest, _ := http.NewRequest(http.MethodGet, serviceLoginAuth.Location, nil)
	serviceTokenClient := &http.Client{}
	serviceTokenResponse, _ := serviceTokenClient.Do(serviceTokenRequest)
	return serviceTokenResponse
}

// Service 接口服务
func Service(uri string, data string, Security string, userId int, ServiceToken string, AgentId string, DeviceId string) []byte {

	serviceUrl := "https://api.io.mi.com/app"

	nonce := getNonce()
	signedNonce := signNonce(Security, nonce)
	signature := getSignature(uri, signedNonce, nonce, data)

	form := url.Values{}
	form.Add("signature", signature)
	form.Add("_nonce", nonce)
	form.Add("data", data)

	request, _ := http.NewRequest(http.MethodPost, serviceUrl+uri, strings.NewReader(form.Encode()))
	request.Header = make(http.Header)
	request.Header["User-Agent"] = []string{fmt.Sprintf("Android-7.1.1-1.0.0-ONEPLUS A3010-136-%s APP/xiaomi.smarthome APPV/62830", AgentId)}
	request.Header["x-xiaomi-protocal-flag-cli"] = []string{"PROTOCAL-HTTP2"}
	request.Header["content-type"] = []string{"application/x-www-form-urlencoded"}
	request.AddCookie(&http.Cookie{Name: "userId", Value: strconv.Itoa(userId)})
	request.AddCookie(&http.Cookie{Name: "serviceToken", Value: ServiceToken})
	request.AddCookie(&http.Cookie{Name: "locale", Value: "zh_CN"})
	response, _ := http.DefaultClient.Do(request)
	body, _ := ioutil.ReadAll(response.Body)

	return body
}

// getNonce Time based nonce
func getNonce() string {
	b1 := make([]byte, 8)
	rand.Read(b1)

	b2 := make([]byte, 4)
	binary.BigEndian.PutUint32(b2, uint32(time.Now().Unix()/60))

	b3 := append(b1, b2...)
	nonce := base64.StdEncoding.EncodeToString(b3)
	return nonce
}

// signNonce nonce signed with secret
func signNonce(secret string, nonce string) string {
	h := sha256.New()

	b1, _ := base64.StdEncoding.DecodeString(secret)
	h.Write(b1)

	b2, _ := base64.StdEncoding.DecodeString(nonce)
	h.Write(b2)

	result := base64.StdEncoding.EncodeToString(h.Sum(nil))
	return result
}

// getSignature request signature based on url, signedNonce, nonce and data
func getSignature(url string, signedNonce string, nonce string, data string) string {
	sign := strings.Join([]string{url, signedNonce, nonce, "data=" + data}, "&")

	b1, _ := base64.StdEncoding.DecodeString(signedNonce)
	h := hmac.New(sha256.New, b1)

	b2 := []byte(sign)
	h.Write(b2)
	signature := h.Sum(nil)

	result := base64.StdEncoding.EncodeToString(signature)
	return result
}
