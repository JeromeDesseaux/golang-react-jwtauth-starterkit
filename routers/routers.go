package routers

import (
	"hello/middlewares"

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

	/*r := gin.Default()
	r.Use(cors.Middleware(cors.Config{
		Origins:         "*",
		Methods:         "GET, PUT, POST, DELETE, OPTIONS",
		RequestHeaders:  "Origin, Authorization, Content-Type",
		ExposedHeaders:  "",
		MaxAge:          50 * time.Second,
		Credentials:     true,
		ValidateHeaders: false,
	}))
	// r.Use(gin.Logger())
	// r.Use(gin.Recovery())*/
	authMiddleware := middlewares.GetAuthMiddleware()
	SetHelloRoutes(e.Group("/restricted"), authMiddleware)
	SetAuthenticationRoutes(e.Group("/auth"), authMiddleware)
	return e
}
