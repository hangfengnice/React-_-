import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { Form, Icon, Input, Button, message } from "antd";
import {reqLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from "../../utils/storageUtils";

import sLogo from '../../assets/images/logo192.png'
import './login.less'

class Login extends Component {
  handleSubmit = e => {
      e.preventDefault();
      // const { getFieldsValue, getFieldValue } = this.props.form;
      // console.log("getFieldValue('username')", getFieldValue("username"));
      // const values = getFieldsValue()
      // console.log("getFieldsValue()", values);
      this.props.form.validateFields(async (err, { username, password }) => {
        if (!err) {
          // console.log(
          //   `Received values of form: , username= ${username}, password= ${password}`
          // );
          const response = await reqLogin(username, password);
          // console.log("成功", response);
          const {status} = response
          if (status === 0) {
            message.success('登录成功')
            const user = response.data
            memoryUtils.user = user // save to 内存
            storageUtils.saveUser(user) // save to localStorage
            // 不需要回退 使用 replace
            this.props.history.replace('/')
          } else {
            message.error(response.msg)
          }
        }
      });
  };

  validatePwd = (rule, value, callback) => {
    value = value.trim()
    if(!value) {
      callback('密码不能为空')
    } else if (value.length < 2) {
      callback("密码不能小于 2 位");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback("需字母 数字 或下划线组成")
    } else {
      callback()
    }
  }

  render() {
    // 用户已登录
    const user = memoryUtils.user
    if (user && user._id) {
      return <Redirect to='/' />
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-header">
          <img src={sLogo} alt="logo" />
          <h1>hello React @ @</h1>
        </div>
        <div className="login-content">
          <h3>用户登录</h3>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                // 声明式验证: 
                rules: [
                  {required: true, whitespace: true, message: "用户名是必须的, 不能有空格!"},
                  {min: 2, message: "不能小于2位字符"},
                  {max: 12, message: "不能大于12位字符"},
                  {pattern: /^[a-zA-Z0-9_]+$/, message: "需字母 数字 或下划线组成"}
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item> 
              {getFieldDecorator("password", {
                // 自定义验证
                rules: [
                  {validator: this.validatePwd}
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create({})(Login);
