import React, { Component } from "react";
import { Card, Select, Input, Button, Icon, Table, message } from "antd";
import { reqProducts, reqSearchProducts, reqUpdateStatus } from "../../api";
import LinkButton from "../../components/link-button";
import { PAGE_SIZE } from "../../utils/constant";
import memoryUtils from "../../utils/memoryUtils";
const Option = Select.Option;

export default class ProductHome extends Component {
  state = {
    loading: false,
    products: [],
    total: 0,
    searchType: "productName", // 默认按商品名称搜索
    searchName: ""
  };
  updateStatus = async (productId, status) => {
    const result = await reqUpdateStatus(productId, status);
    if (result.status === 0) {
      message.success("更新商品成功");
      // 获取当前页 显示
      this.getProducts(this.pageNum);
    }
  };
  initColumn = () => {
    this.column = [
      {
        title: "商品名称",
        dataIndex: "name"
      },
      {
        title: "商品描述",
        dataIndex: "desc"
      },
      {
        title: "商品价格",
        dataIndex: "price",
        render: price => `¥${price}`
      },
      {
        title: "状态",
        // dataIndex: "status",
        width: 100,
        render: ({ status, _id }) => {
          const newStatus = status === 1 ? 2 : 1;
          return (
            <span>
              <Button
                type="primary"
                onClick={() => this.updateStatus(_id, newStatus)}
              >
                {status === 1 ? "下架" : "上架"}
              </Button>
              <span>{status === 1 ? "在售" : "已下架"}</span>
            </span>
          );
        }
      },
      {
        title: "操作",
        width: 100,
        render: product => (
          <span>
            <LinkButton
              onClick={() => {
                this.props.history.push("/product/detail", product);
              }}
            >
              详情
            </LinkButton>
            <LinkButton
              onClick={product => {
                memoryUtils.product = product;
                this.props.history.push("/product/addupdate" );
              }}
            >
              修改
            </LinkButton>
          </span>
        )
      }
    ];
  };
  getProducts = async pageNum => {
    this.pageNum = pageNum
    this.setState({loading: true})
    const {searchName, searchType} = this.state
    let result;
    if (searchName) {
      result = await reqSearchProducts({ pageNum, pageSize: PAGE_SIZE, searchName, searchType});

    } else {
      result = await reqProducts(pageNum, PAGE_SIZE);
    }
    this.setState({ loading: false });
    if (result.status === 0) {
      const {total, list} = result.data
      this.setState({
        total,
        products: list
      })
    }
  };
  UNSAFE_componentWillMount() {
    this.initColumn();
  }
  componentDidMount() {
    this.getProducts(1);
  }
  render() {
    const { loading, products, total, searchType, searchName } = this.state;

    const title = (
      <span>
        <Select
          style={{ width: 120 }}
          value={searchType}
          onChange={value => this.setState({ searchType: value })}
        >
          <Option value="productName">按名称搜索</Option>
          <Option value="productDesc">按描述搜索</Option>
        </Select>
        <Input
          style={{ width: 120, margin: "0 10px" }}
          placeholder="输入关键字"
          value={searchName}
          onChange={e => this.setState({ searchName: e.target.value })}
        />
        <Button type="primary" onClick={() => this.getProducts(1)}>
          搜索
        </Button>
      </span>
    );
    const extra = (
      <Button type="primary" onClick={() => {
        memoryUtils.product = {}
        this.props.history.push('/product/addupdate')}}>
        <Icon type="plus" />
        添加商品
      </Button>
    );
    
    return (
      <Card title={title} extra={extra}>
        <Table
          columns={this.column}
          dataSource={products}
          rowKey="_id"
          bordered
          loading={loading}
          pagination={{
            total,
            defaultPageSize: PAGE_SIZE,
            showQuickJumper: true,
            onChange: this.getProducts,
            current: this.pageNum
          }}
        />
        good
      </Card>
    );
  }
}
