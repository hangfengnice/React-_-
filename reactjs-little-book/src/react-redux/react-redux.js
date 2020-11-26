import React, { Component } from 'react';
import Theme from './context'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextType = Theme
    constructor() {
      super()

      this.state = {
        allProps: {}
      }
    }
    componentDidMount() {
      const store  = this.context
      this._updateProps()
      store.subscribe(() => this._updateProps())
    }
    _updateProps() {
      let store = this.context

      let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {}
      let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {}
      this.setState({
        allProps: {...stateProps, ...dispatchProps, ...this.props}
      })
    }

    render() {
      let {allProps} = this.state
      return <WrappedComponent {...allProps} />
    }
  }
  return Connect
}
