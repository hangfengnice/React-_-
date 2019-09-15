import React, { Component } from 'react'
export default class App extends Component {

  increment = () => {
    let value = this.refs.selectDOM.value * 1;
    // let actionObj = this.incrementAction(value)
    // this.props.store.dispatch(actionObj)
    this.props.incrementAction(value);
  }
  decrement = () => {
    let value = this.refs.selectDOM.value * 1;
    this.props.decrementAction(value);
  }

  handleOddIncrement = () => {
    // let count = this.props.store.getState()
    // if (count % 2 !== 0) {
    //   // this.props.store.dispatch(incrementAction(count));
    // } 
  }
  handleAsyncIncrement = () => {
    let value = this.refs.selectDOM.value * 1;
    this.props.asyncIncrementAction(value)
  }

  componentDidMount() {

    // console.log("ok: ", this.props.store.getState());

  }
  UNSAFE_componentWillMount() {
    console.log(1)
  }

  render() {
    let count = this.props.count;
    return (
      <div>
        <h3>counter: {count}</h3>
        <select ref="selectDOM">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.handleOddIncrement}>increment if add</button>&nbsp;&nbsp;
        <button onClick={this.handleAsyncIncrement}>increment async</button>

        <div>your are great</div>
      </div>
    );
  }
}
