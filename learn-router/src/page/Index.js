import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [{
        name: 'hangfeng',
        id: 1
      },{
        name: 'ying',
        id: 2
      },{
        name: 'zhou',
        id: 3
      }]
    }
    // this.props.history.push('/home')
  }
  render() {
    let {lists} = this.state
    return (
      <div>
        {/* <Redirect to='/home' /> */}
        {lists.map((item, i) => <Link key={item.id} to={`/list/${item.id}`}>{item.name}</Link>)}
      </div>
    )
  }
}
