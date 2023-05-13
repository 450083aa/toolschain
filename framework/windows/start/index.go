package StartWindows

import (
	"archive/zip"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"geekstudio/framework/config"
	"geekstudio/framework/package"
	"geekstudio/framework/package/Xiaomi"
	"github.com/fsnotify/fsnotify"
	"github.com/gookit/color"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"io"
	"net/http"
	"net/url"
	"os"
	"path"
	"path/filepath"
	"strconv"
	"time"
)

type Api struct {
	ctx           context.Context
	Service       *http.Server
	Watcher       *fsnotify.Watcher
	WatcherPath   string
	WatcherFolder []string
	WatcherDone   chan bool
	Status        bool
}

func Init() *Api {
	return &Api{}
}

func (a *Api) Startup(ctx context.Context) {
	a.ctx = ctx
	a.Status = true

	// 创建文件夹监听器
	a.Watcher, _ = fsnotify.NewWatcher()
	a.WatcherDone = make(chan bool)
	go func() {
		for {
			if a.WatcherPath != "" {
				select {
				case event, ok := <-a.Watcher.Events:
					if !ok {
						continue
					}
					fmt.Println(event, event.Op, event.Name, event.String())
				case <-time.After(1 * time.Second):
					continue
				}
			}
		}
	}()
}

func (a *Api) Shutdown(ctx context.Context) {
	// 清除启动锁文件
	os.Remove(Config.Get.Path + ".start_lock")
	if err := a.Service.Shutdown(ctx); err != nil {
		fmt.Println("[geekstudio][start]：" + color.Gray.Text("exit..."))
	}
}

// Ping 返回数据结构体
type returnPing struct {
	Name               string `json:"name"`
	Version            string `json:"version"`
	Os                 string `json:"os"`
	Arch               string `json:"arch"`
	HostName           string `json:"host_name"`
	EnvironmentVersion string `json:"environment_version"`
}

// Ping Ping服务
func (a *Api) Ping() returnPing {

	returnData := returnPing{}

	returnData.Name = Config.Get.Name
	returnData.Version = Config.Get.Version
	returnData.Os = Config.Get.Os
	returnData.Arch = Config.Get.Arch
	returnData.HostName = Config.Get.HostName
	returnData.EnvironmentVersion = "-"

	// 检查基础开发环境部署状态
	PathExists := Package.Exists(Config.Get.Path + "config.json")
	if PathExists {
		jsonFile, err := os.Open(Config.Get.Path + "config.json")
		if err == nil {
			versionStruct := returnPing{}
			decoder := json.NewDecoder(jsonFile)
			err = decoder.Decode(&versionStruct)
			if err == nil {
				returnData.EnvironmentVersion = versionStruct.Version
			}
		}
		defer jsonFile.Close()
	}

	return returnData
}

type returnDirectoryDialog struct {
	Path   string      `json:"path"`
	Config interface{} `json:"config"`
	Tree   interface{} `json:"tree"`
}

// OpenProjectDialog 打开项目文件夹
func (a *Api) OpenProjectDialog(title string, filter string) string {

	returnData := returnDirectoryDialog{}

	directoryPath, err := runtime.OpenDirectoryDialog(a.ctx, runtime.OpenDialogOptions{
		Title: title,
	})
	if err != nil {
		returnJson, _ := json.Marshal(returnData)
		return string(returnJson)
	}

	if directoryPath == "" {
		returnJson, _ := json.Marshal(returnData)
		return string(returnJson)
	}

	if filter == "" {
		returnJson, _ := json.Marshal(returnData)
		return string(returnJson)
	}

	return a.OpenProject(directoryPath, filter)
}

// OpenProject 打开项目
func (a *Api) OpenProject(path string, filter string) string {

	returnData := returnDirectoryDialog{}

	// 打开项目配置文件
	dirPath := ""
	if Config.Get.Os == "windows" {
		dirPath = "\\"
	} else {
		dirPath = "/"
	}

	jsonFile, err := os.Open(path + dirPath + filter)
	if err != nil {
		returnJson, _ := json.Marshal(returnData)
		return string(returnJson)
	}

	decoder := json.NewDecoder(jsonFile)
	err = decoder.Decode(&returnData.Config)
	if err != nil {
		returnJson, _ := json.Marshal(returnData)
		return string(returnJson)
	}

	returnData.Path = path

	a.WatcherFolder = append(a.WatcherFolder, "")

	Tree := Package.ReadProjectTree(path)
	returnData.Tree = Tree

	returnJson, _ := json.Marshal(returnData)

	// 获取目录列表

	if a.WatcherPath != "" {
		a.Watcher.Remove(a.WatcherPath)
	}

	a.WatcherPath = path
	err = a.Watcher.Add(path)
	if err != nil {
		a.Watcher.Remove(a.WatcherPath)
		a.WatcherPath = ""
	}

	return string(returnJson)
}

// OpenProjectFile 打开项目中的文件
func (a *Api) OpenProjectFile(path string) string {
	content := Package.ReadFile(path)
	return content
}

// UpdateProjectFile 更新项目文件
func (a *Api) UpdateProjectFile(path string, content string) error {
	file, err := os.OpenFile(path, os.O_RDWR|os.O_TRUNC, 0766)
	if err != nil {
		return err
	}
	file.WriteString(content)
	file.Close()

	return err
}

// ChatGPTResponseBody 请求体
type ChatGPTResponseBody struct {
	ID      string       `json:"id"`
	Object  string       `json:"object"`
	Created int          `json:"created"`
	Model   string       `json:"model"`
	Choices []choiceItem `json:"choices"`
	Usage   userItem     `json:"usage"`
	Content string       `json:"content"`
}

type choiceItem struct {
	Text         string `json:"text"`
	Index        int    `json:"index"`
	LogProb      int    `json:"logprobs"`
	FinishReason string `json:"finish_reason"`
}

type userItem struct {
	PromptTokens     int `json:"prompt_tokens"`
	CompletionTokens int `json:"completion_tokens"`
	TotalTokens      int `json:"total_tokens"`
}

// ChatGPTRequestBody 响应体
type ChatGPTRequestBody struct {
	Model            string  `json:"model"`
	Prompt           string  `json:"prompt"`
	MaxTokens        int     `json:"max_tokens"`
	Temperature      float32 `json:"temperature"`
	TopP             int     `json:"top_p"`
	FrequencyPenalty int     `json:"frequency_penalty"`
	PresencePenalty  int     `json:"presence_penalty"`
}

const OPENAI = "https://api.openai.com/v1/"

// ChatGPT 文本模型回复
func (a *Api) ChatGPT(content string, token string) (ChatGPTResponseBody, error) {

	responseBody := ChatGPTResponseBody{}
	responseBody.Choices = make([]choiceItem, 0)

	requestBody := ChatGPTRequestBody{
		Model:            "text-davinci-003",
		Prompt:           content,
		MaxTokens:        2048,
		Temperature:      0.7,
		TopP:             1,
		FrequencyPenalty: 0,
		PresencePenalty:  0,
	}
	requestData, err := json.Marshal(requestBody)
	if err != nil {
		responseBody.Content = content
		return responseBody, err
	}

	req, err := http.NewRequest("POST", OPENAI+"completions", bytes.NewBuffer(requestData))
	if err != nil {
		responseBody.Content = content
		return responseBody, err
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+token)
	client := &http.Client{}
	response, err := client.Do(req)
	if err != nil {
		responseBody.Content = content
		return responseBody, err
	}
	defer response.Body.Close()

	body, err := io.ReadAll(response.Body)
	if err != nil {
		responseBody.Content = content
		return responseBody, err
	}

	err = json.Unmarshal(body, &responseBody)
	if err != nil {
		responseBody.Content = content
		return responseBody, err
	}

	responseBody.Content = content
	return responseBody, nil
}

// Xiaomi 小米服务
func (a *Api) Xiaomi(account string, password string) (interface{}, error) {

	deviceList := Xiaomi.DeviceList{}

	DeviceId := Xiaomi.GenerateDeviceId()
	AgentId := Xiaomi.GenerateAgentId()
	serviceLogin := Xiaomi.ServiceLogin(DeviceId, AgentId)
	if serviceLogin.Sign != "" {
		serviceLoginAuth := Xiaomi.ServiceLoginAuth(account, Package.Hash(password), serviceLogin.Sign, DeviceId, AgentId)
		if serviceLoginAuth.Result == "ok" {
			serviceToken := Xiaomi.ServiceToken(serviceLoginAuth)
			for _, cookie := range serviceToken.Cookies() {
				if cookie.Name == "serviceToken" {

					// 记录数据用于后续服务
					Xiaomi.Get.AgentId = AgentId
					Xiaomi.Get.DeviceId = DeviceId
					Xiaomi.Get.ServiceToken = cookie.Value
					Xiaomi.Get.UserName = account
					Xiaomi.Get.Password = Package.Hash(password)
					Xiaomi.Get.Sign = serviceLogin.Sign
					Xiaomi.Get.Code = serviceLoginAuth.Code
					Xiaomi.Get.Result = serviceLoginAuth.Result
					Xiaomi.Get.UserId = serviceLoginAuth.UserId
					Xiaomi.Get.CUserId = serviceLoginAuth.CUserId
					Xiaomi.Get.Location = serviceLoginAuth.Location
					Xiaomi.Get.Token = serviceLoginAuth.Token
					Xiaomi.Get.Security = serviceLoginAuth.Security

					// 构建获取设备列表所需的数据
					data := map[string]interface{}{
						"getVirtualModel": false,
						"getHuamiDevices": 0,
					}
					dataString, _ := json.Marshal(data)
					device := Xiaomi.Service("/home/device_list", string(dataString), Xiaomi.Get.Security, Xiaomi.Get.UserId, Xiaomi.Get.ServiceToken, Xiaomi.Get.AgentId, Xiaomi.Get.DeviceId)
					json.Unmarshal(device, &deviceList)
					if deviceList.Code == 0 && deviceList.Message == "ok" {
						return deviceList, nil
					}
				}
			}
		}
	}

	return deviceList, nil
}

// XiaomiAction 小米动作控制
func (a *Api) XiaomiAction(did string, content string) (interface{}, error) {
	in := make([]string, 1)
	in[0] = content
	data := map[string]map[string]interface{}{
		"params": {
			"did":  did,
			"siid": 5,
			"aiid": 1,
			"in":   in,
		},
	}
	dataString, _ := json.Marshal(data)
	action := Xiaomi.Service("/miotspec/action", string(dataString), Xiaomi.Get.Security, Xiaomi.Get.UserId, Xiaomi.Get.ServiceToken, Xiaomi.Get.AgentId, Xiaomi.Get.DeviceId)
	actionReturn := &Xiaomi.DeviceList{}
	json.Unmarshal(action, actionReturn)
	if actionReturn.Code != 0 {
		return false, nil
	}

	return true, nil
}

// Download 下载文件
func (a *Api) Download(event string, uri string, dir string) {

	fileByte := make([]byte, 1024)
	fileSize := int64(0)
	fileLen := int64(0)

	fileUrl, err := url.ParseRequestURI(uri)

	if err != nil {
		runtime.EventsEmit(a.ctx, event, map[string]interface{}{"status": false, "length": 0, "download": 0})
		return
	}

	filename := path.Base(fileUrl.Path)

	resp, err := http.Get(uri)

	if err != nil {
		runtime.EventsEmit(a.ctx, event, map[string]interface{}{"status": false, "length": 0, "download": 0})
		return
	}
	defer resp.Body.Close()

	if resp.Body == nil {
		runtime.EventsEmit(a.ctx, event, map[string]interface{}{"status": false, "length": 0, "download": 0})
		return
	}

	fileSize, err = strconv.ParseInt(resp.Header.Get("Content-Length"), 10, 32)

	saveDir := dir + filename
	if dir == "" {
		saveDir = Config.Get.Path + filename
	}

	file, err := os.Create(saveDir)
	if err != nil {
		runtime.EventsEmit(a.ctx, event, map[string]interface{}{"status": false, "length": 0, "download": 0})
		return
	}
	defer file.Close()

	for {
		nr, er := resp.Body.Read(fileByte)
		if nr > 0 {
			nw, ew := file.Write(fileByte[0:nr])
			if nw > 0 {
				fileLen += int64(nw)
			}
			if ew != nil {
				err = ew
				break
			}
			if nr != nw {
				err = io.ErrShortWrite
				break
			}
		}
		if er != nil {
			if er != io.EOF {
				err = er
			}
			break
		}
		runtime.EventsEmit(a.ctx, event, map[string]interface{}{"status": true, "length": fileSize, "download": fileLen, "path": Config.Get.Path, "file": filename})
	}
	if err != nil {
		runtime.EventsEmit(a.ctx, event, map[string]interface{}{"status": false, "length": 0, "download": 0})
		return
	}
}

// Unzip 解压ZIP文件
func (a *Api) Unzip(event string, src string, dest string) {
	reader, err := zip.OpenReader(src)
	if err != nil {
		runtime.EventsEmit(a.ctx, event, map[string]interface{}{"status": false, "length": 0, "zip": 0})
		return
	}
	defer reader.Close()

	if dest == "" {
		dest = Config.Get.Path
	}

	for _, file := range reader.File {
		filePath := path.Join(dest, file.Name)
		if file.FileInfo().IsDir() {
			os.MkdirAll(filePath, os.ModePerm)
		} else {
			if err = os.MkdirAll(filepath.Dir(filePath), os.ModePerm); err != nil {
				runtime.EventsEmit(a.ctx, event, map[string]interface{}{"status": false, "length": 0, "zip": 0})
				return
			}
			inFile, err := file.Open()
			if err != nil {
				runtime.EventsEmit(a.ctx, event, map[string]interface{}{"status": false, "length": 0, "zip": 0})
				return
			}
			defer inFile.Close()

			outFile, err := os.OpenFile(filePath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, file.Mode())
			if err != nil {
				runtime.EventsEmit(a.ctx, event, map[string]interface{}{"status": false, "length": 0, "zip": 0})
				return
			}
			defer outFile.Close()

			_, err = io.Copy(outFile, inFile)
			if err != nil {
				runtime.EventsEmit(a.ctx, event, map[string]interface{}{"status": false, "length": 0, "zip": 0})
				return
			}
		}
	}

	runtime.EventsEmit(a.ctx, event, map[string]interface{}{"status": true, "length": 0, "zip": 0})
}
