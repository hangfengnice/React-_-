import React,{PureComponent} from 'react'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import List from './components/List'
import Writter from './components/Writter'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends PureComponent {
  handleScrollTop(){
    window.scrollTo(0,0)
  }
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4668/77e4329017294a607d78e74789afc6a22f4a6ebe.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writter/>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null }
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}
const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) => ({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo())    
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop){
      dispatch(actionCreators.toggleTopShow(true))    
    }else{
      dispatch(actionCreators.toggleTopShow(false))    
    }
  }
})
export default connect(mapState,mapDispatch)(Home)
