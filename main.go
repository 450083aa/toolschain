/**
 ******************************************************************************
 * @file    main.go
 * @author  GEEKROS site:www.geekros.com github:geekros.github.io
 ******************************************************************************
 */

package main

import (
	"embed"
	"fmt"
	"github.com/gookit/color"
	"toolschain/framework"
	"toolschain/framework/config"
)

//go:embed all:template/dist
var Template embed.FS

func main() {
	fmt.Println("[geekstudio][main]：" + color.Gray.Text("starting..."))
	Config.Init()
	Framework.Init(Template)
}
