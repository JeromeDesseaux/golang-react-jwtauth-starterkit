package controllers

import (
	"net/http"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo"
)

func Login(c echo.Context) error {
	username := c.FormValue("username")
	password := c.FormValue("password")

	if username == "admin" && password == "admin" {
		// Create token
		token := jwt.New(jwt.SigningMethodHS256)

		//expire date
		date := time.Now().Add(time.Hour * 72)

		// Set claims
		claims := token.Claims.(jwt.MapClaims)
		claims["name"] = "Jon Snow"
		claims["avatar_url"] = "https://steamrep.com/steamimage/avatars/2b/2ba3473cc65d0d9d25be008aea2cda1af0569bf5_full.jpg"
		claims["admin"] = true
		claims["exp"] = date.Unix()

		// Generate encoded token and send it as response.
		t, err := token.SignedString([]byte("secret"))
		if err != nil {
			return err
		}

		return c.JSON(http.StatusOK, map[string]string{
			"token": t,
		})
	}

	return echo.ErrUnauthorized
}
