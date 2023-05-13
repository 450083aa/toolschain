package TerminalRouter

import (
	"encoding/json"
	ptyPackage "geekstudio/framework/package/pty"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"io"
	"net/http"
	"os"
	"os/exec"
)

var terminalGrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type terminalSize struct {
	Rows uint16 `json:"rows"`
	Cols uint16 `json:"cols"`
	X    uint16
	Y    uint16
}

// Terminal 路由函数
func Terminal(c *gin.Context) {

	conn, err := terminalGrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		return
	}

	cmd := exec.Command("powershell")
	cmd.Env = append(os.Environ(), "TERM=xterm")

	tty, err := ptyPackage.Start(cmd)
	if err != nil {
		conn.WriteMessage(websocket.TextMessage, []byte(err.Error()))
		return
	}

	defer func() {
		cmd.Process.Kill()
		cmd.Process.Wait()
		tty.Close()
		conn.Close()
	}()

	go func() {
		for {
			buf := make([]byte, 1024)
			read, err := tty.Read(buf)
			if err != nil {
				conn.WriteMessage(websocket.TextMessage, []byte(err.Error()))
				return
			}
			conn.WriteMessage(websocket.BinaryMessage, buf[:read])
		}
	}()

	for {
		_, reader, err := conn.NextReader()
		if err != nil {
			return
		}

		dataTypeBuf := make([]byte, 1)
		read, err := reader.Read(dataTypeBuf)
		if err != nil {
			conn.WriteMessage(websocket.TextMessage, []byte("Unable to read message type from reader"))
			return
		}

		if read != 1 {
			return
		}

		switch dataTypeBuf[0] {
		case 0:
			_, err := io.Copy(tty, reader)
			if err != nil {

			}
		case 1:
			decoder := json.NewDecoder(reader)
			resizeMessage := terminalSize{}
			resizeMessage.Cols = 1000
			resizeMessage.Rows = 1000
			err := decoder.Decode(&resizeMessage)
			if err != nil {
				conn.WriteMessage(websocket.TextMessage, []byte("Error decoding resize message: "+err.Error()))
				continue
			}
		default:

		}
	}
}
