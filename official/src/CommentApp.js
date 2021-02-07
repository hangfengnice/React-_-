import React, { Component } from 'react';
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
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList onDeleteComment={this.handleDeleteComment.bind(this)} comments={comments} />
      </div>
    );
  }
  componentDidMount() {
    this._loadComments()
  }
  _loadComments() {
    let comments = localStorage.comments;
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({comments})
    }
  }
  _saveComments(comments) {
    localStorage.comments = JSON.stringify(comments)
  }
  handleSubmitComment(comment) {
    let comments = [...this.state.comments, comment]
    this.setState({
      comments
    })
    this._saveComments(comments)
  }
  handleDeleteComment(index) {
    let {comments} = this.state
    comments.splice(index, 1)
    this.setState({comments})
    this._saveComments(comments)
  }
}

export default CommentApp;
