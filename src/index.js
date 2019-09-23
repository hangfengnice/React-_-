import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import App from './basic/comment/App'
// import App from './basic/github/App'
// import App from './basic/react-router/App'
// import {HashRouter, BrowserRouter} from 'react-router-dom'
// import App from './basic/redux-learn/App'
// import store from "./basic/redux-learn/redux/store";
// import App from './basic/react-redux-learn/containers/App'
// import store from "./basic/react-redux-learn/redux/store";
import {Provider} from 'react-redux'
import store from './redux/store'
// import store from './basic/github/store'
// import store from './basic/comment/redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById("root")
);

