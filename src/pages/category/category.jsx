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
import AddForm from './add-form'
import UpdateForm from './update-form'
import LinkButton from "../../components/link-button";
export default class category extends Component {

  state = {
    categorys: [],
    subCategorys: [],
    loading: false,
    showStatus: 0,
    parentId: "0",
    parentName: ""
  }
  initColumn = () => {
    this.columns = [
      {
        title: "分类的名称",
        dataIndex: "name"
      },
      {
        title: "操作",
        render: category => (
          <span>
            <LinkButton onClick={() => this.showUpdate(category)}>
              修改分类
            </LinkButton>
            {this.state.parentId === "0" ? (
              <LinkButton
                onClick={() => {
                  this.showSubCategorys(category);
                }}
              >
                查看子分类
              </LinkButton>
            ) : null}
          </span>
        ),
        width: 200
      }
    ];
  }

  getCategorys = async (parentId) => {

    this.setState({loading: true})
    parentId = parentId || this.state.parentId
    const result = await reqCategorys(parentId);
    this.setState({ loading: false });
    if(result.status === 0) {

      const categorys = result.data
      if(parentId === '0') {
        // 跟新一级分类
        this.setState({
          categorys
        });
      } else {
        // 更新二级分类
        this.setState({
          subCategorys: categorys
        });
      }
    }
  }
  // 显示指定一级分类对象的二级子列表
  showSubCategorys = category => {
    // 更新状态
    this.setState({
      parentId: category._id,
      parentName: category.name
    }, () => {
      // console.log(this.state.parentId);
      this.getCategorys();
    })
  }
  showCategorys = () => {
    this.setState({
      parentId: "0",
      parentName: "",
      subCategorys: []
    })
  }
  // 取消 modal
  handleCancle = () => {
    // 清除输入数据
    this.form.resetFields()
    this.setState({
      showStatus: 0
    })
  }
  // 增加数据
  addCategory = () => {
    // console.log('addcategory')
    this.form.validateFields(async (err, { categoryName, parentId }) => {
      if (!err) {
        this.setState({ showStatus: 0 });
        // 清除数据
        this.form.resetFields();
        // 收集数据 发请求
        const result = await reqAddCategory(categoryName, parentId);
        if (result.status === 0) {
          if (parentId === this.state.parentId) {
            // 重新获取当前分类列表显示
            this.getCategorys();
          } else if (parentId === "0") {
            this.getCategorys("0");
          }
          message.success("添加数据成功!")
        }
      }
    });
    
  }
  // 更新数据
  updateCategory = () => {
    // console.log("udatecategory")
    // 先进行表单验证
    this.form.validateFields(async (err, {categoryName}) => {
      if (!err) {
        this.setState({ showStatus: 0 });
        // 准备数据
        const categoryId = this.category._id;
        // 清除输入数据
        this.form.resetFields();
        const result = await reqUpdateCategory({ categoryId, categoryName });
        if (result.status === 0) {
          // 重新显示列表
          this.getCategorys();
          message.success("更新数据成功!");
        }
      }
    });

    
  }
  // 显示更新
  showAdd = () => {
    this.setState({showStatus: 1})
  }
  showUpdate = (category) => {
    this.category = category
    this.setState({showStatus: 2})
  }
  UNSAFE_componentWillMount() {
    this.initColumn()
  }
  componentDidMount() {
    this.getCategorys()
  }
  render() {
    const {categorys, showStatus, subCategorys, parentId, parentName} = this.state
    const category = this.category || {}
    const title = parentId === '0' ? "一级分类列表" : (
      <span>
        <LinkButton onClick={this.showCategorys}>一级分类列表</LinkButton>
        <Icon type="arrow-right" style={{margin: "0 5px"}} />
        <span>{parentName}</span>
      </span>
    )
    const extra = (
      <Button type='primary' 
        onClick={this.showAdd}>
        <Icon type='plus'/>
        添加
      </Button>
    )
    return (
      <Card title={title} extra={extra}>
        <Table
          columns={this.columns}
          dataSource={parentId === "0" ? categorys : subCategorys}
          rowKey="_id"
          bordered
          loading={this.loading}
          pagination={{ defaultPageSize: 6, showQuickJumper: true }}
        />
        <Modal
          title="添加分类"
          visible={showStatus === 1}
          onOk={this.addCategory}
          onCancel={this.handleCancle}
        >
          <AddForm
            categorys={categorys}
            parentId={parentId}
            setForm={form => (this.form = form)}
          />
        </Modal>
        <Modal
          title="修改分类"
          visible={showStatus === 2}
          onOk={this.updateCategory}
          onCancel={this.handleCancle}
        >
          <UpdateForm
            categoryName={category.name}
            setForm={form => (this.form = form)}
          />
        </Modal>
      </Card>
    );
  }
}
