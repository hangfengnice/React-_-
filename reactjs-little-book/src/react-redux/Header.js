import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from './react-redux'

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }
  render () {
    const {themeColor} = this.props
    return (
      <h1 style={{color: themeColor}}>React.js 小书</h1>
    )
  }
}
const mapStateToProps = ({themeColor}) => {
  return {
    themeColor
  }
}

export default connect(mapStateToProps)(Header)
