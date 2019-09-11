import React, { Component } from "react";
import { Card, Select, Input, Button, Icon, Table, message } from "antd";
import { reqProducts, reqSearchProducts, reqUpdateStatus } from "../../api";
import LinkButton from "../../components/link-button";
import { PAGE_SIZE } from "../../utils/constant";
const Option = Select.Option;

export default class product extends Component {
  state = {
    loading: false,
    products: [],
    total: 0,
    searchType: "productName", // 默认按商品名称搜索
    searchName: ""
  };
  updateStatus = async (productId, status) => {
    status = status === 1 ? 2 : 1;
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
        render: ({ status, _id }) => {
          let btnText = "下架";
          let text = "在售";
          if (status === 2) {
            btnText = "上架";
            text = "已下架";
          }
          return (
            <span>
              <button onClick={() => this.updateStatus(_id, status)}>
                {btnText}
              </button>
              <span>{text}</span>
            </span>
          );
        }
      },
      {
        title: "操作",
        render: product => (
          <span>
            <LinkButton
              onClick={() => this.props.history.push("/product/detail")}
            >
              详情
            </LinkButton>
            <LinkButton>修改</LinkButton>
          </span>
        )
      }
    ];
  };
  getProducts = async pageNum => {
    this.pageNum = pageNum;
    const { searchType, searchName } = this.state;
    let result;
    if (!searchName) {
      result = await reqProducts(pageNum, PAGE_SIZE);
    } else {
      result = await reqSearchProducts({
        pageNum,
        pageSize: PAGE_SIZE,
        searchName,
        searchType
      });
    }
    if (result.status === 0) {
      const { total, list } = result.data;
      this.setState({
        products: list,
        total
      });
    }
  };
  componentWillMount() {
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
      <Button type="primary">
        <Icon type="plus" />
        添加商品
      </Button>
    );
    return (
      <Card title={title} extra={extra}>
        <Table
          columns={this.columns}
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
      </Card>
    );
  }
}
