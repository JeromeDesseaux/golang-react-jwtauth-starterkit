package routers

import (
	"github.com/JeromeDesseaux/golang-react-jwtauth-starterkit/controllers"

	"github.com/labstack/echo"
)

func SetAuthenticationRoutes(r *echo.Group, authMiddleware echo.MiddlewareFunc) {
	r.POST("/login", controllers.Login)
}
