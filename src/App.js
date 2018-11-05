import React, { Component } from 'react';
import './App.css';
import NavBarCustom from './NavBarCustom.js';
import SandwichCreationPage from './SandwichCreator/SandwichCreationPage.js';
import Button from '@material-ui/core/Button';
import MainPage from './Homepage/MainPage.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (

      <Router>
        <div className="mainApp">
        <NavBarCustom />
        <Switch>
          <Route
            exact path="/"
            component={MainPage}>
          </Route>

          <Route
            exact path="/SandwichCreationPage"
            component={SandwichCreationPage}>
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
