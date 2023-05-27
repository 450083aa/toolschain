/**
 ******************************************************************************
 * @file    index.go
 * @author  GEEKROS site:www.geekros.com github:geekros.github.io
 ******************************************************************************
 */

package StartWindows

import (
	"context"
	"toolschain/framework/config"
)

type Api struct {
	ctx context.Context
}

func Init() *Api {
	return &Api{}
}

func (a *Api) Startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *Api) Shutdown(ctx context.Context) {

}

type returnPing struct {
	Name    string `json:"name"`
	Version string `json:"version"`
}

func (a *Api) Ping() returnPing {
	returnData := returnPing{}

	returnData.Name = Config.Get.Name
	returnData.Version = Config.Get.Version

	return returnData
}
