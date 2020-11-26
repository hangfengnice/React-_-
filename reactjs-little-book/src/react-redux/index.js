import React, { Component } from "react";
// import PropTypes from "prop-types";
import Header from "./Header";
import Content from "./Content";

import Theme from "./context";

function creatStore(reducer) {
  let state = null;
  let listeners = [];
  let getState = () => state;
  let subscribe = (listener) => listeners.push(listener);
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
  dispatch({});
  return { getState, subscribe, dispatch };
}
const themeReducer = (state, action) => {
  if (!state)
    return {
      themeColor: "red",
    };
    console.log(action, 'action');
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, themeColor: action.themeColor };
    default:
      return state;
  }
};

const store = creatStore(themeReducer);

class Index extends Component {
  render() {
    return (
      <Theme.Provider value={store}>
        <div>
          <Header />
          <Content />
        </div>
      </Theme.Provider>
    );
  }
}

export default Index;
