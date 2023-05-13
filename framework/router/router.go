package Router

import (
	"geekstudio/framework/config"
	"geekstudio/framework/router/index"
	"geekstudio/framework/router/tools"
	"github.com/gin-gonic/gin"
	"net/http"
)

// Init 路由初始化函数
func Init() http.Handler {

	router := gin.New()

	gin.SetMode(gin.ReleaseMode)

	router.Use(Cors())

	router.GET("/", IndexRouter.Index)

	router.Any("/terminal", TerminalRouter.Terminal)

	router.Static("/path", Config.Get.Path)

	return router
}

// Cors 跨域中间件
func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {

		method := c.Request.Method

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "*")
		c.Header("Access-Control-Allow-Headers", "*")
		c.Header("Access-Control-Expose-Headers", "*")
		c.Header("Access-Control-Allow-Credentials", "true")

		if method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
		}

		c.Next()
	}
}
