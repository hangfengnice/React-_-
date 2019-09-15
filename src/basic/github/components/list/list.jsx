import React, { Component } from 'react'
import {connect} from 'react-redux'
// import PubSub from 'pubsub-js'
import Item from '../item/item'

class List extends Component {
  // componentDidMount () {
  //   PubSub.subscribe("updateListState", (msg, {isFirst, isLoading,users, errMsg}) => {
  //     this.setState({
  //       isFirst,
  //       isLoading,
  //       users,
  //       errMsg
  //     });
  //   })
  // }
  
  render() {
    let { isFirst, isLoading, users, errMsg } = this.props.state;
    if(isFirst) {
      return <h3>输入关键字 然后点击搜索</h3>
    } else if (isLoading) {
      return <h3>loading...</h3>
    } else if (errMsg) {
      return <h3>{errMsg}</h3>
    } else {
      return (
        <div className="row">
          {
            users.map(item => {
              return <Item key={item.login} {...item}/>
            })
          }
          <Item />
        </div>
      );
    }
  }
}

export default connect(
  state => ({
    state
  })
)(List)
