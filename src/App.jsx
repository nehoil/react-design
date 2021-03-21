import Navbar from './cmps/NavBar';
import Home from './pages/Home';
import 'antd/dist/antd.css';

import './assets/scss/global.scss';
import './App.scss';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import React, { Component } from 'react';

const WelcomeRoute = (props) => {
  return (
    <Route {...props} />
  );
};

export class App extends Component {


  render() {
    const { user } = this.props;
    return (
      <div className="main-container">
        <Router>
          <Navbar />
          <main>
            <Switch>
              <WelcomeRoute
                path="/"
                component={Home}
              />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}


