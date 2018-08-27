package routers

import (
	"hello/controllers"

	"github.com/labstack/echo"
)

func SetAuthenticationRoutes(r *echo.Group, authMiddleware echo.MiddlewareFunc) {
	//authMiddleware := middlewares.GetAuthMiddleware()
	//r.Use(authMiddleware)

	r.POST("/login", controllers.Login)
}
