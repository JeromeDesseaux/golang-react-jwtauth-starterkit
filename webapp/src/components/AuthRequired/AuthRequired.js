import React from 'react';

class AuthRequired extends React.Component {
    render() {
        return (
            (this.props.authenticated)?<div>{this.props.children}</div>:<div></div>
        );
    }
}

export default AuthRequired;