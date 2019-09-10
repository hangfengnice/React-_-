import React, { Component } from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import {Layout} from 'antd'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../home/home'
import category from '../category/category'
import charts from "../charts/charts";
import product from "../product/product";
import role from "../role/role";

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
          <Content style={{ background: "#fff" }}>
            <Switch>
              <Route path="/admin/home" component={Home} />
              <Route path="/admin/category" component={category} />
              <Route path="/admin/product" component={product} />
              <Route path="admin/role" component={role} />
              <Route path="admin/charts" component={charts} />
              {/* <Route path="admin/role" component={home} /> */}
              <Redirect to="/admin/home" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>use google !!</Footer>
        </Layout>
      </Layout>
    );
  }
}
