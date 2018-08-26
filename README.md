
# Golang / React / JWT Auth Starter Kit

  

This project intends to provide a "ready to go" project starter.

  

## Installation

  

1. Clone this repo wherever you need/want it

  

2. Install Golang missing dependencies
`go get ./...`

3. Install front-end dependencies 
``cd webapp && yarn install``

## Usage 

For simplicity, there is no database. There are two users : Admin and Test. Credentials are admin/admin & test/test

TODO : Display different content based on user

Security Tip: the Golang server uses CORS. You can't use any request provider (curl, postman..). This requires to edit the InitRoutes function in the routers package.

### Start golang server
`go run server.go`

### Start React client
`cd webapp && yarn start`

That's it, you should be ready to go(Lang)! 


### License and thanks

This program is entirely free. Feel free to submit any PR. The objective is to make it better every time. 

If this project suits you or has helped you, I'd be glad to get a star from you! Its the best recognition you can give me!