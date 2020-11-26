import React, { Component } from "react";
import PropTypes from "prop-types";

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number,
  };
  constructor() {
    super();
    this.state = {
      createdTime: "",
    };
  }
  render() {
    const { username, content } = this.props.comment;
    const { createdTime } = this.state;
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{username} </span>：
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: this._getProcessedContent(content),
          }}
        >
        </p>
        <span className="comment-createdtime">{createdTime}</span>
        <span
          onClick={this.handleDeleteComment.bind(this)}
          className="comment-delete"
        >
          删除
        </span>
      </div>
    );
  }
  componentDidMount() {
    this._updateTimeString();
    this.timer = setInterval(() => {
      this._updateTimeString();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  _updateTimeString() {
    let { createdTime } = this.props.comment;
    const duration = (Date.now() - createdTime) / 1000;
    createdTime =
      duration > 60 ? `${~~(duration / 60)}分钟前` : `${~~duration}秒前`;
    this.setState({ createdTime });
  }
  _getProcessedContent(content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, "<code>$1</code>");
  }
  handleDeleteComment() {
    let { onDeleteComment, index } = this.props;
    if (onDeleteComment) {
      onDeleteComment(index);
    }
  }
}

export default Comment;
