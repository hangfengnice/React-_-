import React, { Component } from 'react'
import {
  Card,
  Button,
  Table,
  Modal,
  message
} from 'antd'
import { PAGE_SIZE } from "../../utils/constant";
import {formateDate} from '../../utils/dateUtils'
import {reqRoles, reqAddRole, reqUpdateRole} from '../../api/index'
import AddForm from './add-form'
import AuthForm from "./auth-form";

export default class Role extends Component {
  state = {
    roles: [],
    role: {},
    isShowAdd: false,
    isShowAuth: false
  }
  constructor(props) {
    super(props)
    this.auth = React.createRef()
  }
  initColumn = () => {
    this.columns = [
      {
        title: "角色名称",
        dataIndex: "name"
      },
      {
        title: "创建时间",
        dataIndex: "create_time",
        render: create_time => formateDate(create_time)
      },
      {
        title: "授权时间",
        dataIndex: "auth_time",
        render: formateDate
      },
      {
        title: "授权人",
        dataIndex: "auth_name"
      }
    ];
  }
  onRow= (role) => {
    return {
      onClick: event => {
        // console.log(`点击行${role.name}`, role)
        this.setState({
          role
        })
      }
    }
  }
  getRoles = async () => {
    const result = await reqRoles()
    // console.log(result)
    if (result.status === 0) {
      const roles = result.data
      this.setState({
        roles
      })
    }
  }
  addRole = () => {
    this.form.validateFields( async (err, {roleName}) => {
      if (!err) {
        this.setState({isShowAdd: false})
        const result = await reqAddRole(roleName)
        this.form.resetFields()
        if (result.status === 0) {
          message.success("添加角色成功");
          const role = result.data
          // const role = this.state.roles 不建议
          const roles = [...this.state.roles]
          roles.push(role)
          this.setState({roles})
        } else {
          message.error('添加失败')
        }
      }
    })
  }
  updateRole = async () => {
    this.setState({isShowAuth: false})
    const role = this.state.role
    const menus = this.auth.current.getMenus()
    role.menus = menus
    const result = await reqUpdateRole(role)
    if (result.status === 0) {
      message.success('success')
      this.setState({roles: [...this.state.roles]})
    }
  }
  UNSAFE_componentWillMount() {
    this.initColumn()
  }
  componentDidMount() {
    this.getRoles()
  }
  render() {
    const { roles, role, isShowAdd, isShowAuth } = this.state;
    const title = (
      <span>
        <Button
          type="primary"
          onClick={() => this.setState({ isShowAdd: true })}
        >
          创建角色
        </Button>{" "}
        &nbsp;
        <Button
          type="primary"
          disabled={!role._id}
          onClick={() => this.setState({ isShowAuth: true })}
        >
          设置角色权限
        </Button>
      </span>
    );
    return (
      <Card title={title}>
        <Table
          bordered
          rowKey="_id"
          dataSource={roles}
          columns={this.columns}
          pagination={{ defaultPageSize: PAGE_SIZE }}
          rowSelection={{ type: "radio", selectedRowKeys: [role._id] }}
          onRow={this.onRow}
        />
        <Modal
          title="添加角色"
          visible={isShowAdd}
          onOk={this.addRole}
          onCancel={() => {
            this.form.resetFields();
            this.setState({ isShowAdd: false });
          }}
        >
          <AddForm setForm={form => (this.form = form)} />
        </Modal>
        <Modal
          title="设置角色权限"
          visible={isShowAuth}
          onOk={this.updateRole}
          onCancel={() => {
            this.setState({ isShowAuth: false });
          }}
        >
          <AuthForm ref={this.auth} role={role}/>
        </Modal>
      </Card>
    );
  }
}
