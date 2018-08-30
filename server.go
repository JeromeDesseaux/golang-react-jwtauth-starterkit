package main

import (
	"os"

	"github.com/JeromeDesseaux/golang-react-jwtauth-starterkit/routers"
)

func main() {
	port := os.Getenv("PORT")

	e := routers.InitRoutes()

	if port == "" {
		port = "8000"
	}

	e.Logger.Fatal(e.Start(":" + port))
}
