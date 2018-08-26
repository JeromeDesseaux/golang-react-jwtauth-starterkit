package routers

import (
	jwt "github.com/appleboy/gin-jwt"
	"github.com/gin-gonic/gin"
)

func SetAuthenticationRoutes(r *gin.RouterGroup, authMiddleware *jwt.GinJWTMiddleware) {
	//authMiddleware := middlewares.GetAuthMiddleware()
	r.POST("/login", authMiddleware.LoginHandler)
	r.Use(authMiddleware.MiddlewareFunc())
	{
		r.GET("/refresh_token", authMiddleware.RefreshHandler)
	}
}
