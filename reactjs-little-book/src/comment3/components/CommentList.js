import React, { Component } from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentList extends Component {
  static defaultProps = {
    comments: [],
  };
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func,
  };

  render() {
    const { comments } = this.props;
    return (
      <div>
        {comments.map((comment, i) => (
          <Comment
            index={i}
            onDeleteComment={this.handleDeleteComment.bind(this)}
            comment={comment}
            key={i}
          />
        ))}
      </div>
    );
  }
  handleDeleteComment(index) {
    let {onDeleteComment} = this.props
    onDeleteComment && onDeleteComment(index)
  }
}

export default CommentList;
