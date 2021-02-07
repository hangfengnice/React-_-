import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
  render() {
    const {comments} = this.props
    return (
      <div>
        {comments.map((comment, index) => <Comment
        onDeleteComment={this.handleDeleteComment.bind(this)}
        key={comment.content + index}
        index={index}
        comment={comment} />)}
      </div>
    )
  }
  handleDeleteComment(index) {
    let {onDeleteComment} = this.props
    onDeleteComment && onDeleteComment(index)
  }
}
