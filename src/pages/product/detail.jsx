import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {
  Card,
  Icon,
  List
} from 'antd'
import LinkButton from '../../components/link-button'
import memoryUtils from "../../utils/memoryUtils";
const Item = List.Item

export default class ProductDetail extends Component {
  render() {
    const product = memoryUtils.product
    if(!product || !product._id) {
      return <Redirect to='/product' />
    }
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
            <span>{product.name}</span>
          </Item>
          <Item>
            <span className="detail-left">商品描述:</span>
            <span>{product.desc}</span>
          </Item>
          <Item>
            <span className="detail-left">商品价格:</span>
            <span>{product.price}</span>
          </Item>
          <Item>
            <span className="detail-left">所属分类:</span>
            <span></span>
          </Item>
          <Item>
            <span className="detail-left">商品图片:</span>
            <span>
              {product.imgs.map((img, index) => (
                <img key={img} className="detail-img" src={img} alt="" />
              ))}
            </span>
          </Item>
          <Item>
            <span className="detail-left">商品详情:</span>
            <div dangerouslySetInnerHTML={{ __html: product.detail }}></div>
          </Item>
        </List>
      </Card>
    );
  }
}
