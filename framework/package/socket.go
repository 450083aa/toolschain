package Package

import (
	"encoding/json"
	"github.com/gorilla/websocket"
	"net/http"
)

// SocketGrader 消息服务请求定义
var SocketGrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// SocketData 消息服务数据接口
var SocketData = &SocketStruct{}

// SocketStruct 消息服务状态及客户端连接数据结构体
type SocketStruct struct {
	User   map[*websocket.Conn]bool
	Status bool `json:"status"`
}

// SocketMessageFormat 消息数据结构体
type SocketMessageFormat struct {
	Command string `json:"command"`
}

// SocketCallback 消息统一回调函数
func SocketCallback(message []byte) {
	jsonFormat := SocketMessageFormat{}
	err := json.Unmarshal(message, &jsonFormat)
	if err != nil {
		return
	}
}
