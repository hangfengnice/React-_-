import React, { Component } from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import {Layout} from 'antd'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../home/home'
import category from '../category/category'
import product from "../product/product";
import role from "../role/role";
import User from "../user/user";
import Bar from "../charts/bar";
import Line from "../charts/line";
import Pie from "../charts/pie";

const { Footer, Sider, Content } = Layout;

export default class admin extends Component {
  render() {
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <Header />
          <Content style={{ background: "#fff", margin: "20px" }}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/category" component={category} />
              <Route path="/product" component={product} />
              <Route path="/role" component={role} />
              <Route path="/user" component={User} />
              <Route path="/charts/bar" component={Bar} />
              <Route path="/charts/line" component={Line} />
              <Route path="/charts/pie" component={Pie} />
              <Redirect to="/home" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>use google !!</Footer>
        </Layout>
      </Layout>
    );
  }
}
