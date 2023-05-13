package Package

import (
	"crypto/md5"
	"encoding/hex"
	"github.com/gin-gonic/gin"
	"net"
	"net/http"
	"os"
	"strings"
	"time"
)

// EmptyData 空数据
type EmptyData struct {
}

// Success 返回成功信息
func Success(c *gin.Context, code int, msg string, data interface{}) {

	if msg == "" {
		msg = "success"
	}

	c.JSON(http.StatusOK, gin.H{
		"code":      code,
		"msg":       msg,
		"return":    data,
		"ip":        GetIp(),
		"client_ip": c.ClientIP(),
		"time":      time.Now().Format("2006-01-02 15:04:05"),
		"method":    c.Request.Method,
	})

	c.Set("code", code)
}

// Error 返回错误信息
func Error(c *gin.Context, code int, msg string, data interface{}) {

	if msg == "" {
		msg = "error"
	}

	c.JSON(http.StatusOK, gin.H{
		"code":      code,
		"msg":       msg,
		"return":    data,
		"ip":        GetIp(),
		"client_ip": c.ClientIP(),
		"time":      time.Now().Format("2006-01-02 15:04:05"),
		"method":    c.Request.Method,
	})
}

// GetIp 获取本机IP
func GetIp() string {
	Ip := "0.0.0.0"
	addRs, err := net.InterfaceAddrs()
	if err != nil {
		os.Exit(1)
	}
	for _, address := range addRs {
		if ipNet, ok := address.(*net.IPNet); ok && !ipNet.IP.IsLoopback() {
			if ipNet.IP.To4() != nil {
				Ip = ipNet.IP.String()
			}
		}
	}
	return Ip
}

// Hash 密码加密
func Hash(password string) string {
	d := []byte(password)
	m := md5.New()
	m.Write(d)
	hash := hex.EncodeToString(m.Sum(nil))
	return strings.ToUpper(hash)
}
