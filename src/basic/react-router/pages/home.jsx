import React, { Component } from 'react'
import { NavLink, Route, Redirect, Switch } from "react-router-dom";
import HomeNews from './homeNews'
import HomeMessage from './homeMessage'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>home</div>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink to={``}>News</NavLink>
            </li>
            <li>
              <NavLink to="/home/message">Message</NavLink>
            </li>
          </ul>
        </div>
        {/*注册路由*/}
        <Switch>
        <Route path="/home/news" component={HomeNews} />
        <Route path="/home/message" component={HomeMessage} />
        <Redirect to="/home/news" />
        </Switch>
      </div>
    );
  }
}
