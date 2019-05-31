import React from 'react';
import {GlobalStyle } from './style.js';
import {CreateGlobalStyle} from './statics/iconfont/iconfont'
import { BrowserRouter, Route } from "react-router-dom"
import Header from './common/header'
import store from './store'
import {Provider} from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail'


function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <CreateGlobalStyle/>  
      <BrowserRouter>
        <Header/>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/detail' component={Detail}></Route>

      </BrowserRouter>
   </Provider>
  );
}

export default App;
