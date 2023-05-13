package Config

import (
	"fmt"
	"geekstudio/framework/package"
	"github.com/gookit/color"
	"os"
	"runtime"
	"strconv"
	"time"
)

var Get = &config{}

type config struct {
	Name     string `json:"name"`
	Version  string `json:"version"`
	Os       string `json:"os"`
	Arch     string `json:"arch"`
	HostName string `json:"host_name"`
	Path     string `json:"path"`
	IsDev    bool   `json:"is_dev"`
}

// Init 初始化系统配置
func Init() {

	Get.Name = "Geek Studio"
	Get.Version = "0.0.69"
	Get.Os = runtime.GOOS
	Get.Arch = runtime.GOARCH
	Get.HostName, _ = os.Hostname()
	if Get.Os == "windows" {
		path := os.Getenv("APPDATA")
		Get.Path = path + "\\.geek_path\\"
	} else {
		path := os.Getenv("HOME")
		Get.Path = path + "/.geek_path/"
	}

	Get.IsDev = true

	if !Get.IsDev {
		// 校验启动锁
		PathExists := Package.Exists(Get.Path + ".start_lock")
		if PathExists {
			// 读取启动锁文件的时间戳
			content := Package.ReadFile(Get.Path + ".start_lock")
			if content == "" {
				// 老程序直接退出并删除文件
				os.Remove(Get.Path + ".start_lock")
				os.Exit(0)
				return
			}

			// 判断时间
			contentTime, _ := strconv.Atoi(content)
			if (int(time.Now().Unix()) - contentTime) > 5 {
				// 进入任务
				task(Get.Path + ".start_lock")
			} else {
				// 退出程序
				os.Exit(0)
				return
			}
		} else {
			// 创建目录和启动锁文件
			PathCheck := Package.Exists(Get.Path)
			if !PathCheck {
				// 目录不存在则创建
				os.Mkdir(Get.Path, os.ModePerm)
			}
			// 进入任务
			task(Get.Path + ".start_lock")
		}
	}
}

// Task 文件锁时间戳更新任务
func task(file string) {
	go func() {
		for {
			file, err := os.OpenFile(file, os.O_RDWR|os.O_TRUNC|os.O_CREATE, 0766)
			if err != nil {
				os.Exit(0)
			}
			file.WriteString(strconv.Itoa(int(time.Now().Unix()))) //当前时间戳
			file.Close()

			fmt.Println("[geekstudio][task]：" + color.Gray.Text(strconv.Itoa(int(time.Now().Unix()))))

			time.Sleep(5 * time.Second)
		}
	}()
}
