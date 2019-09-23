import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Select } from "antd";
const Item = Form.Item;
const Option = Select.Option

class UserForm extends Component {
  static propTypes = {
    setForm: PropTypes.func.isRequired,
    roles: PropTypes.array.isRequired,
    user: PropTypes.object
  };

  UNSAFE_componentWillMount() {
    this.props.setForm(this.props.form);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { roles } = this.props;
    const user = this.props.user || {}
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 }
    };
    return (
      <Form>
        <Item label="用户名" {...formItemLayout}>
          {getFieldDecorator("username", {
            initialValue: user.username,
            rules: [{ required: true, message: "必须输入角色名称" }]
          })(<Input placeholder="请输入用户名"></Input>)}
        </Item>
        {user._id ? null : (
          <Item label="密码" {...formItemLayout}>
            {getFieldDecorator("password", {
              initialValue: user.password,
              rules: [{ required: true, message: "必须输入角色名称" }]
            })(<Input type="password" placeholder="请输入密码"></Input>)}
          </Item>
        )}
        <Item label="手机号" {...formItemLayout}>
          {getFieldDecorator("phone", {
            initialValue: user.phone,
            rules: [{ required: true, message: "必须输入角色名称" }]
          })(<Input placeholder="请输入手机号"></Input>)}
        </Item>
        <Item label="邮箱" {...formItemLayout}>
          {getFieldDecorator("email", {
            initialValue: user.email,
            rules: [{ required: true, message: "必须输入角色名称" }]
          })(<Input placeholder="请输入邮箱"></Input>)}
        </Item>
        <Item label="角色" {...formItemLayout}>
          {getFieldDecorator("role_id", {
            initialValue: user.role_id,
            rules: [{ required: true, message: "必须输入角色名称" }]
          })(
            <Select>
              {roles.map(role => (
                <Option key={role._id} value={role._id}>
                  {role.name}
                </Option>
              ))}
              <Option value="1">A</Option>
            </Select>
          )}
        </Item>
      </Form>
    );
  }
}

export default Form.create()(UserForm);
