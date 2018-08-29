import React from "react";
import {isLoggedIn, getUserInfos} from "../../core/Auth";
import AuthRequired from '../../components/AuthRequired/AuthRequired';

class Test extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome, {getUserInfos().name}!</h1>
                <p><strong>You know nothing</strong>... But I really like you! =D</p>
                <p>You just logged in successfully using admin/admin credentials!</p>
                <p>I really hope this small project may have helped you using React/Redux with a small Golang backend! Don't forget to star the GitHub Repo! This is really the best you can make for helping me :)</p>
                <h2>Thanks</h2>
                <p>This project uses the following packages. Please star those repositories. Free Software is made by awesome guys. Sharing time and making huge projects. Thanks to them!</p>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React-redux</li>
                    <li>Reactstrap</li>
                    <li>Boostrap 4</li>
                    <li>react-toastify</li>
                </ul>
                <img src={getUserInfos().avatar_url} className="rounded-circle mx-auto d-block" alt={getUserInfos().name} height="128" width="128"/>

                <p>See you!</p>
            </div>
        );
    }
}

class Home extends React.Component {
    render() {
        let authenticated = isLoggedIn();
        return (
            <div>
                <AuthRequired authenticated={authenticated}>
                    <Test></Test>
                </AuthRequired>
                <AuthRequired authenticated={!authenticated}>
                    <h1>Hi, awesome new user!</h1>
                    <p>You may use admin/admin in the login page in order to connect the admin user!</p>
                    <p>See you there!</p>
                </AuthRequired>
            </div>
        );
    };
}



export default Home;