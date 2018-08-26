package controllers

import (
	"fmt"

	jwt "github.com/appleboy/gin-jwt"
	"github.com/gin-gonic/gin"
)

func HelloHandler(c *gin.Context) {
	claims := jwt.ExtractClaims(c)
	fmt.Println(claims)
	c.JSON(200, gin.H{
		"userID": claims["id"],
		"text":   "Hello World.",
	})
}
