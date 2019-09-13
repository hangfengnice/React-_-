import React, { Component } from 'react'
import Add from './components/add/add'
import List from './components/list/list'

export default class App extends Component {
  render() {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="col-md-4">
            <Add />
          </div>
          <List />
        </div>
      </div>
    );
  }
}
