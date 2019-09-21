import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import {
  Card,
  Icon,
  Form,
  Input,
  Select,
  Button,
  message
  // Cascader
} from "antd";
import LinkButton from "../../components/link-button";
import { reqCategorys, reqAddUpdateProduct } from "../../api";
import memoryUtils from '../../utils/memoryUtils'
import PicturesWall from './picture-wall'
import RichTextEditor from './rich-text-editor'
const Item = Form.Item;
const Option = Select.Option
const { TextArea } = Input;
class ProductAddUpdate extends Component {
  constructor(props) {
    super(props);
    this.pwref = React.createRef();
    this.editRef = React.createRef();

  }
  state = {
    categorys: []
  };
  getCategorys = async () => {
    const result = await reqCategorys();
    if (result.status === 0) {
      const categorys = result.data;
      this.setState({ categorys });
    }
  };

  validatePrice = (rule, value, callback) => {
    if (value === "") {
      callback();
    } else if (+value <= 0) {
      callback("价格需大于0");
    } else {
      callback();
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { name, desc, price, categoryId } = values;
        console.log(name, desc, price, categoryId);

        // 收集上传图片的数组
        const imgs = this.pwref.current.getImgs();
        console.log(imgs)

        // 
        const detail = this.editRef.current.getDetail()
        console.log(detail)

        const product = {name, desc, price, categoryId, imgs, detail }
        if(this.isUpdate) {
          product._id = this.product._id
        }

       const result = await reqAddUpdateProduct(product)

       if(result.status === 0) {
         message.success(`${this.isUpdate ? '修改' : '添加'}商品成功`)
         this.props.history.replace('/product')
       }
      }
    });
  };

  UNSAFE_componentWillMount() {
    this.product = memoryUtils.product;
    this.isUpdate = !!this.product._id;
  }

  componentDidMount() {
    this.getCategorys();
  }
  render() {
    const { categorys } = this.state;
    const { product, isUpdate } = this;
    const { getFieldDecorator } = this.props.form;
    const title = (
      <span>
        <LinkButton onClick={() => this.props.history.goBack()}>
          <Icon type="arrow-left" />
        </LinkButton>
        <span>{isUpdate ? "修改商品" : "添加商品"}</span>
      </span>
    );
    const formLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 8 }
    };
    return (
      <Card title={title}>
        <Form {...formLayout} onSubmit={this.handleSubmit}>
          <Item label="商品名称">
            {getFieldDecorator("name", {
              initialValue: product.name,
              rules: [{ required: true, message: "必须输入商品名称!" }]
            })(<Input placeholder="商品名称" />)}
          </Item>
          <Item label="商品描述">
            {getFieldDecorator("desc", {
              initialValue: product.desc,
              rules: [{ required: true, message: "必须输入商品描述!" }]
            })(<TextArea placeholder="商品描述" autosize={{ minRows: 2, maxRows: 6 }} />)}
          </Item>
          <Item label="商品价格">
            {getFieldDecorator("price", {
              initialValue: product.price,
              rules: [
                { required: true, message: "必须输入价格" },
                { validator: this.validatePrice }
              ]
            })(<Input type="number" placeholder="商品价格" addonAfter="元" />)}
          </Item>
          <Item label="商品分类">
            {getFieldDecorator("categoryId", {
              initialValue: product.categoryId || "",
              rules: [{ required: true, message: "必须输入商品分类!" }]
            })(
              <Select>
                <Option value="">未选折</Option>
                {categorys.map(c => (
                  <Option value={c._id} key={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
            )}
          </Item>
          <Item label="商品图片">
            <PicturesWall ref={this.pwref} imgs={product.imgs} />
          </Item>
          <Item label="商品详情" wrapperCol={{ span: 20 }}>
            <RichTextEditor ref={this.editRef} detail={product.detail} />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Item>
        </Form>
      </Card>
    );
  }
}

export default Form.create()(ProductAddUpdate);
