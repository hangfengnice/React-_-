import React from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './comment3/CommentApp'
import './index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './comment3/reducer'


// import App from './App'
// import App from './react-redux'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store} >
    <CommentApp />
  </Provider>
  ,
  document.getElementById('root')
)

// const appState = {
//   title: {
//     text: 'React.js 小书',
//     color: 'red',
//   },
//   content: {
//     text: 'React.js 小书内容',
//     color: 'blue'
//   }
// }

// function stateChanger (state, action) {
//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       state.title.text = action.text
//       break
//     case 'UPDATE_TITLE_COLOR':
//       state.title.color = action.color
//       break
//     default:
//       break
//   }
// }

// function createStore(state, stateChanger) {
//   const listenres = []
//   const subscribe = (listener) => listenres.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     stateChanger(state, action)
//     listenres.forEach(listener => listener())
//   }
//   return {getState, dispatch, subscribe}
// }

// const store = createStore(appState, stateChanger)

// function renderApp (appState) {
//   renderTitle(appState.title)
//   renderContent(appState.content)
// }

// function renderTitle (title) {
//   const titleDOM = document.getElementById('title')
//   titleDOM.innerHTML = title.text
//   titleDOM.style.color = title.color
// }

// function renderContent (content) {
//   const contentDOM = document.getElementById('content')
//   contentDOM.innerHTML = content.text
//   contentDOM.style.color = content.color
// }



// dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })

// renderApp(appState)
