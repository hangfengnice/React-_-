import React, { Component } from 'react'
import {Layout} from 'antd'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

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
          <Content style={{ background: "#fff" }}>Content</Content>
          <Footer style={{ textAlign: "center"}}>use google !!</Footer>
        </Layout>
      </Layout>
    );
  }
}
