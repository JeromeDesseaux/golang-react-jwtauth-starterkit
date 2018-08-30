package middlewares

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

/*GetAuthMiddleware returns a basic configuration for Gin Middleware
TODO: Add configuration struct*/
func GetAuthMiddleware() echo.MiddlewareFunc {
	return middleware.JWTWithConfig(middleware.JWTConfig{
		SigningKey: []byte("secret"),
	})
}
