import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {
  Card,
  Icon,
  List
} from 'antd'
import LinkButton from '../../components/link-button'
import memoryUtils from "../../utils/memoryUtils";
import { reqCategory } from "../../api";
import { BASE_IMG } from "../../utils/constant";
const Item = List.Item

export default class ProductDetail extends Component {
  state = {
    cName: "",
  }
  async componentDidMount() {
    const { categoryId } = this.props.location.state;
    console.log()
    const result = await reqCategory(categoryId)
    const cName = result.data.name
    this.setState({cName})
  }
  render () {
    const {name, desc, price, detail, imgs} = this.props.location.state;
    const {cName} = this.state
    const title = (
      <span>
        <LinkButton>
          <Icon type="arrow-left" style={{ fontSize: 20 }}
           onClick={() => this.props.history.goBack()} />
        </LinkButton>
        <span>商品详情</span>
      </span>
    );
    return (
      <Card title={title} className="product-detail">
        <Item>
          <span className="detail-left">商品名称: </span>
          <span>{name}</span>
        </Item>
        <Item>
          <span className="detail-left">商品描述: </span>
          <span>{desc}</span>
        </Item>
        <Item>
          <span className="detail-left">商品价格: </span>
          <span>{price}</span>
        </Item>
        <Item>
          <span className="detail-left">所属分类: </span>
          <span>{cName}</span>
        </Item>
        <Item>
          <span className="detail-left">商品图片: </span>
          <span>
            {imgs.map(img => (
              <img
                key={img}
                className="detail-img"
                src={BASE_IMG + img}
                alt="img"
              />
            ))}
          </span>
        </Item>
        <Item>
          <span className="detail-left">商品详情: </span>
          <span dangerouslySetInnerHTML={{ __html: detail }}></span>
        </Item>
      </Card>
    );
  }
}
