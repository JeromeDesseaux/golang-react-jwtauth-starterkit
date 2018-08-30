
# Golang / React / JWT Auth Starter Kit

  

This project intends to provide a "ready to go" project starter for Golang and ReactJS using Redux (for state management), Bootstrap and JWT Authentication.

  

## Installation

  

1. Go get this repo: `go get github.com/JeromeDesseaux/golang-react-jwtauth-starterkit`

2. cd to this repo: `cd $GOPATH/src/github.com/JeromeDesseaux/golang-react-jwtauth-starterkit`
  
3. Install eventual Golang missing dependencies: `go get ./...`

4. Install front-end dependencies: ``cd webapp && yarn install``

## Usage 

For simplicity, there is no database. There are only one user : Admin. Credentials are admin/admin.

This user is just a simple admin user. The server stores some informations (admin/avatar_url/name) in a JWT token.

TODO : Display different content based on user
TODO : Add a config manager (Dev/Prod)

Security Tip: The golang server uses CORS. By default, it uses a development profile which is quite permissive. I plan adding a config manager soon to get it as restrictive as possible for a production environement. 

### Start golang server
In a first terminal run : 
`go run server.go`

### Start React client
In a second terminal run :
`cd webapp && yarn start`

That's it, you should be ready to go(Lang)! 

## Precisions

This project is just a **basic** one. There is no useless dependencies, no server side rendering, caching or whatever. It aims to be *pure* in order to let you develop your own solution faster and using your tools. 

## Why Redux? It's useless here!

Yes, it is. In fact, Redux is commonly used accross Reacts applications. I just wanted to set it up in order to get it run faster. There are two main approches : 
- Add Redux when you need it 
- Add Redux when you start a project

I prefer the second approach simply because you mostly always need Redux and its a pain to set it when the project grows. 

### How does this project uses Redux ?

A simple notification system. Whenever you want, you can trigger a notification. In this example, there is only one during the login process. But this starter can be used for whatever type of notification, whenever you want in your app without managing Notification type and rendering everywhere ;) 

### License and thanks

This program is entirely free. Feel free to submit any PR. The objective is to make it better every time. 

It remains on some other projects I'd like to thanks:
- React
- Redux
- React-redux
- Reactstrap
- Bootstrap
- React-notify
- Yarn
- Echo
- Go-JWT

If this project suits you or has helped you, I'd be glad to get a star from you! Don't forget to star also the repo used for this project. Free software is made by guys giving their free time for helping a community. You are this community. Make it live <3