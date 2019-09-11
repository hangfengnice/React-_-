import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import './index.less'
import { Menu, Icon } from "antd";
import logo from '../../assets/images/logo192.png'
import menuList from '../../config/menuConfig'

const { SubMenu } = Menu;

class leftNav extends Component {

  // reduce

  getMenuNodes2 = (menuList) => {
    const path = this.props.location.pathname

    const list =  menuList.reduce((pre, item) => {
      if(!item.children) {
        pre.push(
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      } else {
        const cItem = item.children.find(cItem => cItem.key === path)
          if (cItem) {
            this.openKey = cItem.key
          }
        pre.push(
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuNodes2(item.children)}
          </SubMenu>
        );
      }
      return pre
    }, [])
    console.log(list);
    return list
  }
  // getMenuNodes = (menuList) => {
  //     return menuList.map(item => {
  //       if(!item.children) {
  //         return (
  //           <Menu.Item key={item.key}>
  //             <Link to={item.key}>
  //               <Icon type={item.icon} />
  //               <span>{item.title}</span>
  //             </Link>
  //           </Menu.Item>
  //         );
  //       }
  //       return (
  //         <SubMenu
  //           key={item.key}
  //           title={
  //             <span>
  //               <Icon type={item.icon}/>
  //               <span>{item.title}</span>
  //             </span>
  //           }
  //         >
  //           {this.getMenuNodes(item.children)}
  //         </SubMenu>
  //       );
  //     })
  // }
  /**
   * 
   */
  componentWillMount () {
    this.menuNodes = this.getMenuNodes2(menuList);
  }

  render() {
    const selectKey = this.props.location.pathname
    return (
      <div className="left-nav">
        <Link className="left-nav-link" to="/admin/home">
          <img src={logo} alt="" />
          <h3>React</h3>
        </Link>

        <Menu
          selectedKeys={[selectKey]}
          defaultOpenKeys={[this.openKey]}
          mode="inline"
          theme="dark"
          // inlineCollapsed={this.state.collapsed}
        >
          {this.menuNodes}
        </Menu>
      </div>
    );
  }
}

export default withRouter(leftNav)
