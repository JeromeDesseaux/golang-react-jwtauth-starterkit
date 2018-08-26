package routers

import (
	"hello/middlewares"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/itsjamie/gin-cors"
)

func InitRoutes() *gin.Engine {
	r := gin.Default()
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
	// r.Use(gin.Recovery())
	authMiddleware := middlewares.GetAuthMiddleware()
	SetHelloRoutes(r.Group("/restricted"), authMiddleware)
	SetAuthenticationRoutes(r.Group("/auth"), authMiddleware)
	return r
}
