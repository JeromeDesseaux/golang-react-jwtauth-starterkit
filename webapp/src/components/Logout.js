import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import {deleteLocalStorage} from "../core/Auth";
import {DropdownItem} from 'reactstrap';


class Logout extends React.Component {

    constructor(){
      super();
      this.logout = this.logout.bind(this);
    }
  
    logout() {
      deleteLocalStorage();
      this.props.history.push("/");
    }
  
    render () {
        return (
          <DropdownItem onClick={this.logout}>{this.props.name}</DropdownItem>
            // <a className="dropdown-item" onClick={this.logout}>Logout</a>
        )
    }
  }

  export default withRouter(Logout);