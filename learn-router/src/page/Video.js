import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import ReactPage from './video/ReactPage'
import Vue from './video/Vue'
import Flutter from './video/Flutter'

export default class Video extends Component {
  render() {
    // const match = useRouteMatch()
    // console.log(object);
    return (
      <div>
        <div className="topNav">
          <ul>
            <li>
              <Link to='/video/reactpage'>react 教程</Link>
              <Link to='/video/flutter'>flutter 教程</Link>
              <Link to='/video/vue'>vue 教程</Link>
            </li>
          </ul>
        </div>
        <div>
          <div>video contnet</div>
          <Route path='/video/reactpage' component={ReactPage} />
          <Route path='/video/vue' component={Vue} />
          <Route path='/video/flutter' component={Flutter} />
        </div>
      </div>
    )
  }
}
