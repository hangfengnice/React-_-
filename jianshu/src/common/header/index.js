import React, { Component } from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import hdCss from './header.module.scss'
import './animate.css'

class Header extends Component {
  // constructor(props) {
  //   super(props)
  //   this.handleInputFocus = this.handleInputFocus.bind(this)
  //   this.handleInputBlur = this.handleInputBlur.bind(this)
  // }
  render() {
    return (
      <div className={hdCss['hd-wrap']}>
        <div className={hdCss.hd_logo}
        //  href='http://www.baidu.com'
         ></div>
        <nav className={hdCss.nav}>
          <div className={`${hdCss['nav-i']} ${hdCss.left}`}>首页</div>
          <div className={`${hdCss['nav-i']} ${hdCss.left}`}>下载App</div>
          <div className={`${hdCss['nav-i']} ${hdCss.right}`}>退出</div>
          <div className={`${hdCss['nav-i']} ${hdCss.right}`}>
          <i className="iconfont">&#xe636;</i>
          </div>
          <div className={hdCss['search-wrap']}>
            <CSSTransition
            in={this.props.focused}
            timeout={1000}
            classNames='slide'
            >
            <input
             onFocus={this.props.handleInputFocus}
             onBlur={this.props.handleInputBlur}
             className={ `${hdCss.input} ${this.props.focused ? hdCss.focused : ''}`} type="text" placeholder='搜索'/>
             </CSSTransition>
            <i className={`iconfont ${hdCss.zoom} ${this.props.focused ? hdCss.focused : ''}`}>
                &#xe614;
              </i>
          </div>
          
        </nav>

        <div className={hdCss.add}>
          <button className={`${hdCss['btn']} ${hdCss.writting}`}>
          <i className="iconfont">&#xe615;</i>
            写文章</button>
          <button className={`${hdCss['btn']} ${hdCss.red}`}>注册</button>
        </div>

        
      </div>
    )
  }
  handleInputFocus() {
    this.setState({
      focused: true
    })
  }
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
