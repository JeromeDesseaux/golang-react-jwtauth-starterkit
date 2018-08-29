import React from 'react';
import { Link } from "react-router-dom";
import {isLoggedIn, getUserInfos} from "../core/Auth";

import Logout from './Logout';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
/*DropdownItem*/ } from 'reactstrap';
import AuthRequired from './AuthRequired/AuthRequired'
import './Navigation.css'

class ProfileImage extends React.Component {
  render() {
    return(
      <img src={getUserInfos().avatar_url} className="rounded-circle" alt={getUserInfos().name} height="28" width="28"/>
    )
  }
}

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="bg-custom">
          <div className="container">
          <NavbarBrand href="/">React/Redux+Golang backend</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <AuthRequired authenticated={!isLoggedIn()}>
                <NavItem>
                  <NavLink tag={Link} to='/login'>Login</NavLink>
                </NavItem>
              </AuthRequired>
              <AuthRequired authenticated={isLoggedIn()}>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <ProfileImage />
                  </DropdownToggle>
                  <DropdownMenu right>
                    {/* <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider /> */}
                    <Logout name="Logout" />
                  </DropdownMenu>
                </UncontrolledDropdown>
              </AuthRequired>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;