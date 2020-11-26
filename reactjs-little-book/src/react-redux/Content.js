import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import {connect} from './react-redux'

class Content extends Component {
  static porpTypes = {
    themeColor: PropTypes.string
  }

  render () {
    let {themeColor} = this.props
    return (
      <div>
        <p style={{color: themeColor}}>React.js 小书内容</p>
        <ThemeSwitch  />
      </div>
    )
  }
}

const mapStateToProps = ({themeColor}) => ({themeColor})

export default connect(mapStateToProps)(Content)
