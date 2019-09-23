import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Tree } from "antd";
import menuList from '../../config/menuConfig'
const Item = Form.Item;
const { TreeNode } = Tree;

export default class AuthForm extends Component {
  static propTypes = {
    role: PropTypes.object
  };
  constructor(props) {
    super(props)
    const {menus} = this.props.role
    this.state = {
      checkedKeys: menus
    }
  }
  // 为父组件 
  getMenus = () => this.state.checkedKeys
  getTreeNodes = (menuList) => {
    return menuList.reduce((pre, cur) => {
      pre.push(<TreeNode title={cur.title} key={cur.key}>
        {cur.children ? this.getTreeNodes(cur.children) : null}
      </TreeNode>)
      return pre
    }, [])
  }
  onCheck = (checkedKeys) => {
    console.log(checkedKeys);
    this.setState({checkedKeys})
  }
  UNSAFE_componentWillMount() {
    this.treeNode = this.getTreeNodes(menuList)
  }
  UNSAFE_componentWillReceiveProps(props) {
    console.log("nextProps", props)
   const menus = props.role
   this.setState({checkedKeys: menus})
  }
  render() {
    const { role } = this.props
    const {checkedKeys} = this.state
    const formItemLayout = {
      labelCol: {span: 4},
      wrapperCol: {span: 16}
    }
    // console.log(role)
    return (
      <div>
        <Item label="角色名称" {...formItemLayout}>
          <Input placeholder="请输入角色名称" value={role.name} disabled />
        </Item>
        <Tree
          checkable
          defaultExpandAll={true}
          checkedKeys={checkedKeys}
          onCheck={this.onCheck}
        >
          <TreeNode title="平台权限" key="all">
            {this.treeNode}
          </TreeNode>
        </Tree>
      </div>
    );
  }
}
