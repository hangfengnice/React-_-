import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter'
import './index.css'

// function AppRouter() {
//   return (
//     <Router>
//       {/* <ul>
//         <li><Link to='/'>首页</Link></li>
//         <li><Link to='/list'>列表</Link></li>
//       </ul> */}
//       <Route path='/' exact component={Index}></Route>
//       <Route path='/list/:id'  component={List}></Route>
//       <Route path='/home'  component={Home}></Route>
//     </Router>
//   )
// }

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

