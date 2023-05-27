/**
 ******************************************************************************
 * @file    config.go
 * @author  GEEKROS site:www.geekros.com github:geekros.github.io
 ******************************************************************************
 */

package Config

import (
	"os"
	"runtime"
)

var Get = &config{}

type config struct {
	Name     string `json:"name"`
	Version  string `json:"version"`
	Os       string `json:"os"`
	Arch     string `json:"arch"`
	HostName string `json:"host_name"`
	Path     string `json:"path"`
}

func Init() {
	Get.Name = "Tools Chain"
	Get.Version = "1.0.0"
	Get.Os = runtime.GOOS
	Get.Arch = runtime.GOARCH
	Get.HostName, _ = os.Hostname()
	if Get.Os == "windows" {
		path := os.Getenv("APPDATA")
		Get.Path = path + "\\.chan_path\\"
	} else {
		path := os.Getenv("HOME")
		Get.Path = path + "/.chan_path/"
	}
}
