package main

import (
	"hello/routers"
	"log"
	"net/http"
	"os"
)

// type login struct {
// 	Username string `form:"username" json:"username" binding:"required"`
// 	Password string `form:"password" json:"password" binding:"required"`
// }

// func helloHandler(c *gin.Context) {
// 	claims := jwt.ExtractClaims(c)
// 	c.JSON(200, gin.H{
// 		"userID": claims["id"],
// 		"text":   "Hello World.",
// 	})
// }

// User demo
// type User struct {
// 	UserName  string
// 	FirstName string
// 	LastName  string
// }

func main() {
	port := os.Getenv("PORT")

	r := routers.InitRoutes()

	if port == "" {
		port = "8000"
	}

	/*r.NoRoute(authMiddleware.MiddlewareFunc(), func(c *gin.Context) {
		claims := jwt.ExtractClaims(c)
		log.Printf("NoRoute claims: %#v\n", claims)
		c.JSON(404, gin.H{"code": "PAGE_NOT_FOUND", "message": "Page not found"})
	})*/

	// auth := r.Group("/auth")
	// auth.Use(authMiddleware.MiddlewareFunc())
	// {
	// 	auth.GET("/hello", helloHandler)
	// 	auth.GET("/refresh_token", authMiddleware.RefreshHandler)
	// }

	/*config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"}
	config.AllowHeaders = []string{"application/json"}

	r.Use(cors.New(config))*/

	if err := http.ListenAndServe(":"+port, r); err != nil {
		log.Fatal(err)
	}
}
