import React,{Component} from "react";
import {CSSTransition} from 'react-transition-group'
import {connect} from "react-redux"
import {actionCreators} from './store'
import {Link} from 'react-router-dom'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SrarchInfoList,
  SearchInfoItem
} from './style';



class Header extends Component{

  getListArea(){
   
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const jsList = list.toJS()
    const pageList = []
      for(let i = (page - 1) * 10; i < page * 10; i ++){
          pageList.push(
            <SearchInfoItem key={Math.random()}>{jsList[i]}</SearchInfoItem>
          )
      }
    if(focused || mouseIn){
      return (
       <SearchInfo 
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}>
       <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)}>
          <i ref={(icon) => this.spinIcon = icon } className="iconfont spin">&#xe600;</i>
            换一批
          </SearchInfoSwitch>
       </SearchInfoTitle>
       <SrarchInfoList>
         {pageList}
       </SrarchInfoList>
       </SearchInfo>
      )
    }else{
      return null
    }
}
  render(){
    const {focused, handleInputFocus, handleInputBlur, list, login, logout} = this.props
    return(
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>       
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login ? 
            <NavItem className='right' onClick={logout}>退出</NavItem> : 
            <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
          }         
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
           <CSSTransition
            in={focused} timeout={200} classNames="slide"
           >
            <NavSearch
            onFocus={() => handleInputFocus(list)}
            onBlur={handleInputBlur}
            className= {focused ? 'focused ' : ''}
              >
           </NavSearch>
           </CSSTransition> 
          <i className= {focused ? 'focused iconfont zoom' : 'iconfont zoom'}
          >&#xe631;</i>
           {this.getListArea()}
          </SearchWrapper>       
        </Nav>      
        <Addition>
          <Link to='/writter'>
            <Button className='writting'>
            <i className="iconfont">&#xe606;</i>
            写文章
            </Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
const mapState = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    totalPage: state.getIn(['header','totalPage']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn']),
    login: state.getIn(['login','login'])
  }
}
const mapDispatch = (dispatch) =>{
  return {
    handleInputFocus(list){
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage,spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
        if(originAngle){
          originAngle = parseInt(originAngle,10)
        }else{
          originAngle = 0
        }
        spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
      if(page < totalPage){
        dispatch(actionCreators.changePage(page + 1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    },
    logout(){
      dispatch(loginActionCreators.logout())
    }
  }
  }

export default connect(mapState,mapDispatch)(Header)