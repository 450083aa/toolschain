/**
 ******************************************************************************
 * @file    framework.go
 * @author  GEEKROS site:www.geekros.com github:geekros.github.io
 ******************************************************************************
 */

package Framework

import (
	"embed"
	"fmt"
	"github.com/gookit/color"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
	"toolschain/framework/windows/start"
)

func Init(template embed.FS) {

	start := StartWindows.Init()

	err := wails.Run(&options.App{
		Title:     "",
		Width:     1200,
		Height:    768,
		MinWidth:  1200,
		MinHeight: 768,
		AssetServer: &assetserver.Options{
			Assets: template,
		},
		BackgroundColour: &options.RGBA{R: 30, G: 31, B: 34, A: 1},
		OnStartup:        start.Startup,
		OnShutdown:       start.Shutdown,
		Bind: []interface{}{
			start,
		},
		Windows: &windows.Options{
			DisableWindowIcon: true,
			CustomTheme: &windows.ThemeSettings{
				// 黑色主题
				DarkModeTitleBar:  windows.RGB(43, 45, 48),
				DarkModeTitleText: windows.RGB(187, 187, 187),
				DarkModeBorder:    windows.RGB(60, 63, 65),
				// 亮色主题
				LightModeTitleBar:  windows.RGB(43, 45, 48),
				LightModeTitleText: windows.RGB(187, 187, 187),
				LightModeBorder:    windows.RGB(60, 63, 65),
				// 黑色主题失去焦点时
				DarkModeTitleBarInactive:  windows.RGB(60, 63, 65),
				DarkModeTitleTextInactive: windows.RGB(187, 187, 187),
				DarkModeBorderInactive:    windows.RGB(60, 63, 65),
				// 亮色主题失去焦点时
				LightModeTitleBarInactive:  windows.RGB(60, 63, 65),
				LightModeTitleTextInactive: windows.RGB(187, 187, 187),
				LightModeBorderInactive:    windows.RGB(60, 63, 65),
			},
		},
	})

	if err != nil {
		fmt.Println("[toolschain][framework]：" + color.Gray.Text(err.Error()))
	}
}
