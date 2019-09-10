import React, { Component } from 'react'
import { Form, Icon, Input, Button } from "antd";
import sLogo from '../../assets/images/logo192.png'
import './login.less'

class login extends Component {
  handleSubmit = e => {
      e.preventDefault();
      const form = this.props.form
      const values = form.getFieldsValue()
      console.log(values);
      this.props.form.validateFields((err, { username, password }) => {
        if (!err) {
          console.log(
            `Received values of form: , username= ${username}, password= ${password}`
          );
        }
      });
  };

  validatePwd = (rule, value, callback) => {
    value = value.trim()
    if(!value) {
      callback('密码不能为空')
    } else if (value.length > 6) {
      callback("密码不能大于 6 位");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback("需字母 数字 或下划线组成")
    } else {
      callback()
    }
  }

  render() {
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
                rules: [
                  {required: true, message: "用户名是必须的!"},
                  {min: 1, message: "不能小于4位"},
                  {max: 12, message: "不能大于12位"},
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

const WrapperForm = Form.create({ name: "normal_login" })(login);

export default WrapperForm;
