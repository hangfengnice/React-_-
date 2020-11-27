import React, {useState} from "react";
import ReactDOM from "react-dom";


function App() {
  const [name, setName] = useState('hangfeng')
  const [yy, setYy] = useState('hangfeng')

  return <div>
    <p>name: {name}</p>
    <p>yy: {yy}</p>
    <button onClick={() => setName(name + '1')}>click</button>
    <button onClick={() => setYy(yy + '1')}>click</button>
    butt
  </div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
