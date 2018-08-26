package routers

import (
	"hello/controllers"

	jwt "github.com/appleboy/gin-jwt"
	"github.com/gin-gonic/gin"
)

func SetHelloRoutes(r *gin.RouterGroup, authMiddleware *jwt.GinJWTMiddleware) {
	r.Use(authMiddleware.MiddlewareFunc())
	{
		r.GET("/hello", controllers.HelloHandler)
	}
}
