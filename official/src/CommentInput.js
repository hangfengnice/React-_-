import React, { Component } from "react";

export default class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      content: ''
    }
  }
  render() {
    const {username, content} = this.state
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input value={username}
            onBlur={this.handleUsernameBlur.bind(this)}
            onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea ref={textarea => this.textarea = textarea} value={content} onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布2</button>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this._loadUsername()
    this.textarea.focus()

  }
  handleUsernameChange(event) {
    let {value: username} = event.target
    this.setState({username})
  }
  handleUsernameBlur({target: {value}}) {
    this._saveUsername(value)
  }
  _loadUsername() {
    let username = localStorage.username
    this.setState({
      username
    })
  }
  _saveUsername(value) {
    localStorage.username = value
  }
  handleContentChange(event) {
    let {value: content} = event.target
    this.setState({content})
  }
  handleSubmit() {
    let {onSubmit} = this.props
    let {content, username} = this.state
    if (onSubmit) {
      let createdTime = Date.now()
      onSubmit({username, content, createdTime})
    }
    this.setState({content: ''})
  }
}
