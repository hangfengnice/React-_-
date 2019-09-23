import React, { Component } from 'react'
import {
  Card,
  Button,
  Table,
  Modal,
  message
} from 'antd'
import LinkButton from '../../components/link-button'
import {formateDate} from "../../utils/dateUtils";
import {PAGE_SIZE} from '../../utils/constant'
import { reqUsers, reqDeleteUsers, reqAddOrUpdateUsers } from "../../api/index";
import UserForm from './user-form'
export default class User extends Component {
  state = {
    users: [],
    roles: [],
    isShow: false
  }
  initColumn = () => {
    this.columns = [
      {
        title: "用户名",
        dataIndex: "username"
      },
      {
        title: "邮箱",
        dataIndex: "email"
      },

      {
        title: "电话",
        dataIndex: "phone"
      },
      {
        title: "注册时间",
        dataIndex: "create_time",
        render: formateDate
      },
      {
        title: "所属角色",
        dataIndex: "role_id",
        render: role_id => role_id && this.state.roles.find(role => role._id === role_id).name
      },
      {
        title: "操作",
        render: user => (
          <span>
            <LinkButton onClick={() => this.showUpdate(user)}>修改</LinkButton>
            <LinkButton onClick={() => this.deleteUser(user)}>删除</LinkButton>
          </span>
        )
      }
    ];
  }
  addOrUpdateUser = async () => {
    const user = this.form.getFieldsValue()
    this.form.resetFields()
    this.setState({isShow: false})
    if (this.user) {
      user._id = this.user._id
    }
    const result = await reqAddOrUpdateUsers(user);
    console.log(result)
    if (result.status === 0) {
      message.success(`${this.user ? '修改' : "添加"} 用户成功`)
      this.getUSers()
    }
  }
  initRoleNames = (roles) => {
    this.roleNames = roles.reduce((pre, role) => {
      pre[role._id] = role.name
      return pre
    }, {})
  }
  deleteUser = (user) => {
    console.log(user)
    Modal.confirm({
      title: `确认删除 ${user.username}`,
      onOk: async () => {
        const result = await reqDeleteUsers(user._id)
        if (result.status === 0) {
          message.success('删除成功')
          this.getUSers()
        }
      },

    })
  }
  showUpdate = (user) => {
    this.user = user
    this.setState({isShow: true})
  }
  showAdd = () => {
    this.user = null
    this.setState({isShow: true})
  }
  getUSers = async () => {
    const result = await reqUsers()
    if (result.status === 0) {
      const {roles, users} = result.data
      this.initRoleNames(roles)
      this.setState({roles, users})
    }
  }
  UNSAFE_componentWillMount() {
    this.initColumn()
  }
  componentDidMount() {
    this.getUSers()
  }
  render() {
    const {users, isShow, roles} = this.state
    const user = this.user || {}
    const title = (
      <Button type='primary' onClick={this.showAdd}>
        创建用户
      </Button>
    )
    
    return (
      <Card title={title}>
        <Table
          bordered
          rowKey="_id"
          dataSource={users}
          columns={this.columns}
          pagination={{ defaultPageSize: PAGE_SIZE }}
        />
        <Modal
          title={user._id ? "修改用户" : "添加用户"}
          visible={isShow}
          onOk={this.addOrUpdateUser}
          onCancel={() => {
            this.form.resetFields()
            this.setState({ isShow: false });
          }}
        >
          <UserForm setForm={form => (this.form = form)} roles={roles} user={user}/>
        </Modal>
      </Card>
    );
  }
}
