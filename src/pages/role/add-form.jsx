import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
const Item = Form.Item;

class AddForm extends Component {
  static propTypes = {
    setForm: PropTypes.func.isRequired,
  };

  UNSAFE_componentWillMount() {
    this.props.setForm(this.props.form);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {span: 4},
      wrapperCol: {span: 16}
    }
    return (
      <Form>
        <Item label="角色名称" {...formItemLayout}>
          {getFieldDecorator("roleName", {
            rules: [{ required: true, message: "必须输入角色名称" }]
          })(<Input placeholder="请输入角色名称"></Input>)}
        </Item>
      </Form>
    );
  }
}

export default Form.create()(AddForm);
