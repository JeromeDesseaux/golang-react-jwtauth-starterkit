import React from "react";
import {setToken} from "../../core/Auth";

class Login extends React.Component {
    constructor() {
        super();
        
        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange = (e) => {
        let newState = {}
        newState[e.target.name] = e.target.value
        this.setState(newState)
    }

    handleSubmit(event) {
        event.preventDefault();

        let rawData = {
            username: this.state.username,
            password: this.state.password
        }

        let formData  = new FormData();

        for(var name in rawData) {
            formData.append(name, rawData[name]);
        }


        fetch('http://localhost:8000/auth/login', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
        .then(response => {
            //this.props.userHasAuthenticated(true);
            setToken(response.token)
            this.props.history.push("/");
            console.log(response);  
        });
    }
    render() {
        return (
            <div className="text-center">
                <form className="form-signin" _lpchecked="1" onSubmit={this.handleSubmit}>
                {/* <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> */}
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Login</label>
                <input id="inputEmail" className="form-control" placeholder="login" required="" autoFocus="" autoComplete="off" name="username" onChange={this.handleChange} value={this.state.username}></input>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" autoComplete="off" name="password" onChange={this.handleChange} value={this.state.password}></input>
                <div className="mb-3">
                    <label><input type="checkbox" name="checkbox" value="value"></input> Remember me</label>
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
  

        );
    };
}

export default Login;