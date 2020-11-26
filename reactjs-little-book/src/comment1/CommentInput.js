import React, { Component } from 'react'

class CommentInput extends Component {
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
            <input value={username} onChange={this.handleUsernameChange.bind(this)}  />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={content} onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
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
      onSubmit({username, content})
    }
    this.setState({content: ''})
  }
}

export default CommentInput
