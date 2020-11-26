import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
  constructor() {
    super()
    this.state = {
      username: '',
      content: ""
    }
  }
  render() {
    const {username, content} = this.state
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={username}
            onBlur={this.handleUsernameBlur.bind(this)}
             onChange={this.handleUsernameChange.bind(this)}  />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea ref={textarea => this.textarea = textarea} value={content} onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button  onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }

  handleUsernameChange(e) {
    let {value} = e.target
    this.setState({
      username: value
    })
  }
  handleUsernameBlur(e) {
    let {value} = e.target
    this._saveUsername(value)
  }
  _saveUsername(username) {
    localStorage.username = username
  }
  _loadUsername() {
    const username = localStorage.username
    this.setState({
      username
    })
  }

  handleContentChange(e) {
    let {value} = e.target
    this.setState({
      content: value
    })
  }
  handleSubmit() {
    let {onSubmit} = this.props
    if (onSubmit) {
      const {username, content} = this.state
      if (!username) console.log('no username');
      if (!content) console.log('no content');
      onSubmit({username, content, createdTime: Date.now()})
    }
    this.setState({content: ''})
  }
  componentDidMount() {
    console.log(this.textarea);
    this.textarea.focus()
    this._loadUsername()
  }
}

export default CommentInput
