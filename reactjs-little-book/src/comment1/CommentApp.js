import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }
  render() {
    const {comments} = this.state
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}  />
        <CommentList comments={comments} />
      </div>
    )
  }
  handleSubmitComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
}

export default CommentApp
