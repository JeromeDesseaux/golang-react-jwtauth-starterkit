package routers

import (
	"github.com/JeromeDesseaux/golang-react-jwtauth-starterkit/controllers"

	"github.com/labstack/echo"
)

func SetHelloRoutes(r *echo.Group, authMiddleware echo.MiddlewareFunc) {
	r.Use(authMiddleware)
	r.GET("/hello", controllers.HelloHandler)
}
