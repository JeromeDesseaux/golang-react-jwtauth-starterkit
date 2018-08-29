import "react-toastify/dist/ReactToastify.css";

import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import { Switch, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container pt-3">
          <ToastContainer autoClose={4000}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
