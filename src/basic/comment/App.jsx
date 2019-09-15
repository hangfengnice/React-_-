import React, { Component } from 'react'
import Add from './containers/Add'
import List from './containers/List'

export default class App extends Component {

  // addComment = (commentObj) => {
  //   let comments = [...this.state.comments]
  //   comments.unshift(commentObj)
  //   this.setState({comments})
  // }
  // deleteComment = (userId) => {
  //   let comments = [...this.state.comments];
  //   comments = comments.filter(item => item.userId !== userId);
  //   this.setState({comments})
  // }
  render() {
    let comments = this.props.store
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
          <div className="row">
            <Add addComment={this.addComment} />
            <List comments={comments} deleteComment={this.deleteComment} />
          </div>
        </div>
      </div>
    );
  }
}
