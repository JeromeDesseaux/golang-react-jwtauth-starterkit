package routers

import (
	"hello/controllers"

	"github.com/labstack/echo"
)

func SetHelloRoutes(r *echo.Group, authMiddleware echo.MiddlewareFunc) {
	r.Use(authMiddleware)
	r.GET("/hello", controllers.HelloHandler)
}
