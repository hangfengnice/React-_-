import React, { Component } from 'react'
import {
  Card,
  Button,
  Icon,
  Table,
  Modal,
  message
} from "antd"
import { reqCategorys, reqAddCategory, reqUpdateCategory } from "../../api";
import AddUpdateForm from './add-update-form'
import LinkButton from "../../components/link-button";
export default class category extends Component {

  state = {
    categorys: [],
    loading: false,
    showStatus: 0
  }
  handleOk = () => {
    this.form.validateFields(async (err, values) => {
      if (!err) {
        const {categoryName} = values
        const {showStatus} = this.state
        let result
        if(showStatus === 1) {
          result = await reqAddCategory(categoryName);
        } else {
          const categoryId = this.category._id;
          result = await reqUpdateCategory({ categoryId, categoryName });
        }
        this.form.resetFields();
        const action = showStatus === 1 ? "添加" : "修改"
        this.setState({showStatus: 0})
        if(result.status === 0) {
          this.getCategorys()
          message.success(`${action}分类成功`)
        }
        
      }
    });
    
  }
  handleCancle = () => {
    this.form.resetFields();
    this.setState({
      showStatus: 0
    })
  }
  initColumn = () => {
    this.columns = [
      {
        title: "分类的名称",
        dataIndex: "name"
      },
      {
        title: "操作",
        render: (category) => (
          <LinkButton onClick={() => {
            this.category = category
            this.setState({ showStatus: 2 })}}>
            修改分类
          </LinkButton>
        ),
        width: 200
      }
    ];
  }
  getCategorys = async () => {
    this.setState({loading: true})
    const result = await reqCategorys()
    this.setState({ loading: false });
    if(result.status === 0) {
      const categorys = result.data
      this.setState({
        categorys
      })
    }
  }
  UNSAFE_componentWillMount() {
    this.initColumn()
  }
  componentDidMount() {
    this.getCategorys()
  }
  render() {
    const {categorys, showStatus} = this.state
    const category = this.category || {}

    const extra = (
      <Button type='primary' onClick={() => {
        this.category = {}
        this.setState({showStatus: 1})}}>
        <Icon type='plus'/>
        添加
      </Button>
    )
    return (
      <Card extra={extra}>
        <Table
          columns={this.columns}
          dataSource={categorys}
          rowKey='_id'
          bordered
          loading={this.loading}
          pagination={{ defaultPageSize: 6, showQuickJumper: true }}
        />
        <Modal
          title={showStatus === 1 ? "添加分类" : "修改分类"}
          visible={showStatus !== 0}
          onOk={this.handleOk}
          onCancel={this.handleCancle}
        >
          <AddUpdateForm setForm={form => this.form = form} categoryName={category.name}  />
        </Modal>
      </Card>
    );
  }
}
