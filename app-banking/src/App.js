import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './component/login/Login'
import Private from './component/private/Private'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route path='/private' component={Private} />
      </div>
    );
  }
}

export default App;
