package main

import (
	"embed"
	"fmt"
	"geekstudio/framework"
	"geekstudio/framework/config"
	"geekstudio/framework/router"
	"github.com/gookit/color"
	"net/http"
	"time"
)

//go:embed all:template/dist
var Template embed.FS

func main() {

	fmt.Println("[geekstudio][main]：" + color.Gray.Text("starting..."))

	// 初始化系统配置
	Config.Init()

	// 启动系统服务
	service := &http.Server{
		Addr:           fmt.Sprintf(":%d", 10081),
		Handler:        Router.Init(),
		ReadTimeout:    60 * time.Second,
		WriteTimeout:   60 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}

	// 系统服务监听
	go func() {
		if err := service.ListenAndServe(); err != nil {
			fmt.Println("[geekstudio][main]：" + color.Gray.Text("exit"))
		}
	}()

	// 初始化框架
	Framework.Init(Template, service)
}
