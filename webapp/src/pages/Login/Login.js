import React from "react";
import {setToken} from "../../core/Auth";
import { connect } from "react-redux";
import { incrementAction, decreaseAction } from "../../actions";
import store from '../../store';
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

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
            setToken(response.token)
            this.props.history.push("/");
            store.dispatch(incrementAction("Connected Succesfully"));
        });
    }
    render() {
        return (
            <div>
                {/* <form className="form-signin" _lpchecked="1" onSubmit={this.handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Login</label>
                <input id="inputEmail" className="form-control" placeholder="login" required="" autoFocus="" autoComplete="off" name="username" onChange={this.handleChange} value={this.state.username}></input>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" autoComplete="off" name="password" onChange={this.handleChange} value={this.state.password}></input>
                <div className="mb-3">
                    <label><input type="checkbox" name="checkbox" value="value"></input> Remember me</label>
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form> */}
                <Row className="mx-auto">
                    <Col sm="12" md="6" lg="6" className="col-md-auto mx-auto">
                        <h1 className="mb-5 mt-5 text-center">Authentication</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="exampleEmail" hidden>
                                    Login
                                </Label>
                                <Input name="username" id="exampleEmail" onChange={this.handleChange} value={this.state.username} placeholder="Login" required />
                            </FormGroup>{" "}
                            <FormGroup>
                                <Label for="examplePassword" hidden>
                                Password
                                </Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" required onChange={this.handleChange} value={this.state.password}/>
                            </FormGroup>{" "}
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    state
});



const mapDispatchToProps = (dispatch) => ({
    incrementAction: () => dispatch(incrementAction()),
    decreaseAction: () => dispatch(decreaseAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);