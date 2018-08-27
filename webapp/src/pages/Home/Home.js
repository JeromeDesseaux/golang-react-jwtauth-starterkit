import React from "react";
import {isLoggedIn, getUserInfos} from "../../core/Auth";

class Home extends React.Component {
    render() {
        return (
            <div>
                {
                    ( !isLoggedIn() ) ? <p>Please log in first</p>  :  <p>Hello, {getUserInfos().name}! You know nothing!</p>
                }
            </div>
        );
    };
}

export default Home;