package IndexRouter

import (
	"encoding/json"
	"geekstudio/framework/package"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

// Index 路由函数
func Index(c *gin.Context) {

	client, _ := Package.SocketGrader.Upgrade(c.Writer, c.Request, nil)

	if !Package.SocketData.Status {
		Package.SocketData.User = make(map[*websocket.Conn]bool)
		Package.SocketData.Status = true
	}

	Package.SocketData.User[client] = true

	for {

		// 读取收到的消息
		_, data, err := client.ReadMessage()
		if err != nil {
			break
		}

		// 进行消息的统一处理
		Package.SocketCallback(data)

		// 向订阅客户端分发消息
		jsonFormat := Package.SocketMessageFormat{}
		err = json.Unmarshal(data, &jsonFormat)
		if err == nil {
			// 下发符合消息规范的消息数据
			if jsonFormat.Command != "" {
				for user := range Package.SocketData.User {
					err := user.WriteMessage(websocket.TextMessage, data)
					if err != nil {
						// 客户端消息发送失败视为客户端断开了连接，则清除相关连接信息
						user.Close()
						delete(Package.SocketData.User, user)
					}
				}
			}
		}
	}
}
