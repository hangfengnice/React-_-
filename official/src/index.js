import React, {useState, useRef, useEffect} from "react";
import ReactDOM from "react-dom";


function usePrevious(value) {
  const ref = useRef()
  console.log('outer here');
  useEffect(() => {
    console.log('here');
    ref.current = value
  })
  return ref.current
}

function Example(props) {
  // 把最新的 props 保存在一个 ref 中
  const latestProps = useRef(props);
  useEffect(() => {
    latestProps.current = props;
    console.log(latestProps);
  });

  useEffect(() => {
    function tick() {
      // 在任何时候读取最新的 props
      console.log(latestProps.current);
    }

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []); // 这个 effect 从不会重新执行
  return 'hello world'
}
ReactDOM.render(
  <Example />
  , document.getElementById("root"));
