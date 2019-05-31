# React ^_^

## 关键点  

### 数据单向流  
- 由store存储数据，reducer处理数据 
   + 省事的话把store放在入口文件处  
   ```javascript  
   import React from 'react';
   import {GlobalStyle } from './style.js';
   import {CreateGlobalStyle} from './statics/iconfont/iconfont'
   import { BrowserRouter, Route } from "react-router-dom"
   import Header from './common/header'
   import store from './store'
   import {Provider} from 'react-redux'
   import Home from './pages/home'
   import Detail from './pages/detail'
   import Login from './pages/login'
   function App() {
   return (
   <Provider store={store}>
   <GlobalStyle/>
   <CreateGlobalStyle/>  
   <BrowserRouter>
   <Header/>
   <Route exact path='/' component={Home}></Route>
   <Route exact path='/login' component={Login}></Route>
   <Route exact path='/detail/:id' component={Detail}></Route>

      </BrowserRouter>
   </Provider>
  );
   }
   export default App;  
   ```  
   
   
### 功能模块化（各司其职）  
— 一个文件就处理一个方面  
   + 一开始感觉会是更加麻烦 重构3遍觉得 有一定的道理  
   
### 单页面  
- 路由时没有感到卡顿，比非单页面项目体验好不少  

### 与后端数据交接时的动态路由  
- 传递数值的路径很长   

### 代码报错，找错  
- 没有报具体文件路径的一般是代码拼写的错误，很费神  

### 以下是一些组件，使用场景，方法，作用，在琢磨

### [styled-components--github](https://github.com/styled-components/styled-components)

- `createGlobalStyle`跟[ResetCss](https://meyerweb.com/eric/tools/css/reset/)
   + 主要是减少各个流浪器对某些样式的差异差异
   + 两者配合建立全局样式
   + 使用方法  
   ```javascript  
   import { createGlobalStyle } from 'styled-components'
   const GlobalStyle = createGlobalStyle`
   body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
   }
  `
  // later in your app
  
  <React.Fragment>
  <GlobalStyle whiteColor />
  <Navigation /> {/* example of other top-level stuff */}
  </React.Fragment>  
  ```  
-  

### react-transition-group
- [CSSTransition](https://reactcommunity.org/react-transition-group/css-transition)
   + 添加动画

### redux
- createStore
  reducer
  
   + 
- combineReducers
   + 整合reducer

### redux-immutable
- combineReducers
   + 让数据成为immutable数据

### react-redux
- Provider
   + 
- connect

### immutable
- fromJS
   + 
- List

### redux-thunk
- ajax
   + 
- List
   + 

### axios
- 发送ajax
   + 
- List

### react-router-dom
- 路由
   + 
- List
   + 

