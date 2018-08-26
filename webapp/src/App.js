import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import { Switch, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
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
