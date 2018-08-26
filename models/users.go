package models

/*User represents a user and its binding parameters*/
type User struct {
	UUID     string `json:"uuid" form:"-"`
	Username string `json:"username" form:"username" binding:"required"`
	Password string `json:"password" form:"password" binding:"required"`
}
