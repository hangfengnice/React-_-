import React from "react";
import ReactDOM from "react-dom";
import CommentApp from './CommentApp'
import './index.css'


// function Example() {
//   const str = '<h1>hello world</h1>'
//   return <div dangerouslySetInnerHTML={{__html: str}}></div>
// }

ReactDOM.render(
  <CommentApp />
  , document.getElementById("root"));
