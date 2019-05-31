import React,{Component} from 'react'
import {
  DetailWrapper,
  Header,
  content
} from './style'
class Detail extends Component {
  render(){
    return (
      <DetailWrapper>
        <Header>安慰别人时，千万别说“加油哦”〜〜那要说什么？</Header>
        <content>
          <img src="//upload-images.jianshu.io/upload_images/3229217-4062bca3f685439e" alt=""/>
          <p>收起暴脾气：白羊座是行走的炸药包，遇到不爽的事情一点就炸，还经常被人当做炮灰，但是一旦白羊恋爱了，就会一反常态，他们会收起自己的暴脾气，变成温顺的小绵羊，对恋人关怀备至，甚至顺从对方做自己不愿意做的事情。</p>
        </content>
      </DetailWrapper>
    )
  }
}

export default Detail
