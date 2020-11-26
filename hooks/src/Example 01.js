import React, { useReducer } from "react";

export default function Example() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "del":
        return state - 1;
        default:
        return state
    }
  }, 0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch("add")}>add</button>
      <button onClick={() => dispatch("del")}>del</button>
    </div>
  );
}
