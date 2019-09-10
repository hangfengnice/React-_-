import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.less'
import { Menu, Icon } from "antd";
import logo from '../../assets/images/logo192.png'

const { SubMenu } = Menu;

export default class leftNav extends Component {
  render() {
    return (
      <div className="left-nav">
        <Link className="left-nav-link" to="/admin/home">
          <img src={logo} alt="" />
          <h3>React</h3>
        </Link>

        <Menu
          defaultSelectedKeys={["/home"]}
          // defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          // inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="/home">
            <Link to="/admin/home">
              <Icon type="home" />
              <span>首页</span>
            </Link>
          </Menu.Item>

          <SubMenu
            key="products"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="/category">
              <Link to="/admin/category">
                <Icon type="folder-open" />
                <span>品类管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to=''>
                <Icon type="desktop" />
                <span>商品</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
