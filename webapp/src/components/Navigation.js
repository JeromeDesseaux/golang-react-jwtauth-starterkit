import React from 'react';
import { Link } from "react-router-dom";
import {isLoggedIn} from "../core/Auth";
import Logout from './Logout';

// const NavItem = props => {
//     const pageURI = window.location.pathname+window.location.search
//     const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
//     const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
//     return (
//         <li className={liClassName}>
//         <a href={props.path} className={aClassName}>
//             {props.name}
//             {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
//         </a>
//         </li>
//     );
// }

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ show: false })
      alert('You clicked outside of me!');
    }
  }

  toggleDropdown() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const classDropdownMenu = 'dropdown-menu' + (this.state.show ? ' show' : '')
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={this.state.show} data-toggle="dropdown" 
          onClick={this.toggleDropdown}>
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    )
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Navbar</Link> 
        {/* <a className="navbar-brand" href="/">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

              <li className="nav-item">
                  {
                      ( !isLoggedIn() ) ? <Link to="/login" className="nav-link">Login</Link>  :  ''
                  }
                  
              </li>

              <Logout />
              
              <NavDropdown name="Dropdown">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                  <div className="dropdown-divider"></div>
                  <Logout />
              </NavDropdown>
            
          </ul>

        </div>
      </nav>
    )
  }
}


export default Navigation;