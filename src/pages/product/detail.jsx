import React, { Component } from 'react'
import {
  Card,
  Icon,
  List
} from 'antd'
import LinkButton from '../../components/link-button'
const Item = List.Item

export default class ProductDetail extends Component {
  render() {
    const title = (
      <span>
        <LinkButton onClick={() => this.props.history.goBack()}>
          <Icon type='arrow-left' />
        </LinkButton>
        <span>商品详情</span>
      </span>
    )
    return (
      <Card title={title} className="detail">
        <List>
          <Item>
            <span className="detail-left">商品名称:</span>
            <span>aaa</span>
          </Item>
          <Item>
            <span className="detail-left">商品描述:</span>
            <span>aaa</span>
          </Item>
          <Item>
            <span className="detail-left">商品价格:</span>
            <span>aaa</span>
          </Item>
          <Item>
            <span className="detail-left">所属分类:</span>
            <span>c c c</span>
          </Item>
          <Item>
            <span className="detail-left">商品图片:</span>
            <span>
              <img
                className="detail-img"
                src="https://tvax3.sinaimg.cn/crop.135.0.810.810.180/006LO43wly8frjay2sypvj30u00mita5.jpg"
                alt=""
              />
              <img
                className="detail-img"
                src="https://tvax3.sinaimg.cn/crop.135.0.810.810.180/006LO43wly8frjay2sypvj30u00mita5.jpg"
                alt=""
              />
            </span>
          </Item>
          <Item>
            <span className="detail-left">商品详情:</span>
            <div dangerouslySetInnerHTML={{ __html: "<></>" }}></div>
          </Item>
        </List>
      </Card>
    );
  }
}
