import React, { Component } from 'react'
import {connect} from 'react-redux'
import {asyncSearch} from '../../store/actions'
// import PubSub from 'pubsub-js'

class Search extends Component {
  keyWordRef = React.createRef()
  search = () => {
    let keyWord = this.keyWordRef.current.value
    // PubSub.publish("updateListState", {isFirst: false,isLoading: true,users: [],errMsg: ""
    // });
    this.props.asyncSearch(keyWord)
    this.keyWordRef.current.value = '';
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            ref={this.keyWordRef}
            placeholder="enter the name you search"
          />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({}),
  {
    asyncSearch
  }
)(Search)