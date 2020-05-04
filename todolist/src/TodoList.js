import React, { Component } from "react";

import { Button, Input, List } from "antd";
import {
  getInputChangeAction,
  addTodoItemAction,
  deleteItemAction,
  // initListAciton,
  getTodoList
} from "./store/actionCreators";
import store from "./store";
import "antd/dist/antd.css";

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <div style={{ margin: 10 }}>
        <div>
          <Input
            value={this.state.inputValue}
            style={{ width: 300, marginRight: 10 }}
            placeholder="please input something"
            onChange={this.handleInputChange}
          />
          <Button onClick={this.handleBtnClick} type="primary">
            helo
          </Button>
        </div>

        <List
          style={{ marginTop: 10, width: 300 }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemClick.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
  componentDidMount() {
    const action = getTodoList()
    // console.log(action);
    store.dispatch(action)
  }

  handleInputChange(e) {
    store.dispatch(getInputChangeAction(e.target.value));
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleBtnClick() {
    store.dispatch(addTodoItemAction());
  }
  handleItemClick(index, e) {
    store.dispatch(deleteItemAction(index));
  }
}
