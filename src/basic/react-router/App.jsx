import React, { Component } from 'react'
import {Link, Route, NavLink, Redirect, Switch} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
        </div>

        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Route path="/about" component={About}></Route>
              <Route path="/home" component={Home}></Route>
              <Redirect to='/home'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
