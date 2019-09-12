import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Input
} from 'antd'

const Item = Form.Item

class AddUpdateform extends Component {
  static propTypes = {
    setForm: PropTypes.func.isRequired,
    categoryName: PropTypes.string
  };

  UNSAFE_componentWillMount() {
    this.props.setForm(this.props.form);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {categoryName} = this.props
    return (
      <Form>
        <Item>
          {getFieldDecorator("categoryName", {
            initialValue: categoryName || '',
            rules: [
              {
                required: true,
                message: "分类名称必须输入"
              }
            ]
          })(<Input placeholder="情输入分类名称"></Input>)}
        </Item>
      </Form>
    );
  }
}

export default Form.create()(AddUpdateform);
