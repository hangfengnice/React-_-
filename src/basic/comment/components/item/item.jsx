import React, { Component } from 'react'
import './item.less'

export default class Item extends Component {
  delete = () => {
    let { index, deleteCommentAction } = this.props;

    deleteCommentAction(index);
  }
  render() {
    let {userName, content} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="#1" onClick={this.delete}>删除</a>
        </div>
        <p className="user">
          <span>{userName}</span>
          <span>说:</span>
        </p>
        <p className="centence">{content}</p>
      </li>
    );
  }
}
