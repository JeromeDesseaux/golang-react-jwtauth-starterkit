package routers

import (
	"github.com/JeromeDesseaux/golang-react-jwtauth-starterkit/middlewares"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func setCORS(e *echo.Echo, dev bool) {
	if dev {
		e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
			AllowOrigins: []string{"*"},
			AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE, echo.OPTIONS},
		}))
	} else {
		e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
			AllowOrigins: []string{"https://localhost:3000"},
			AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE, echo.OPTIONS},
		}))
	}
}

func InitRoutes() *echo.Echo {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// TODO: Add a settings manager
	setCORS(e, true)

	authMiddleware := middlewares.GetAuthMiddleware()
	SetHelloRoutes(e.Group("/restricted"), authMiddleware)
	SetAuthenticationRoutes(e.Group("/auth"), authMiddleware)
	return e
}
