import React, { Component } from 'react'
import uuid from 'uuid'
export default class Add extends Component {
  userName = React.createRef()
  content = React.createRef()
  add = (event) => {
    let {addCommentAction} = this.props

    let userName = this.userName.current.value
    let content = this.content.current.value
    if (userName === '' || content === '') {
      console.log('不能为空')
      return
    }

    let obj = {userId: uuid(), userName, content}
    addCommentAction(obj);

    // 清空
    this.userName.current.value = ""
    this.content.current.value = '';
  }
  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref={this.userName} />>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea
              className="form-control"
              rows="6"
              placeholder="评论内容"
              ref={this.content}
            ></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.add}>
                提交
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
