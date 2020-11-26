import React, { Component } from 'react'

export default class List extends Component {
  constructor() {
    super()
    this.state = {
      id: ''
    }
  }
  render() {
    const {id} = this.state
    return (
      <div>
        list id: {id}
      </div>
    )
  }
  componentDidMount() {
    let {match} = this.props
    let {id} = match.params
    this.setState({
      id
    })
  }
}
