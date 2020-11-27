import React, {useState} from "react";
import ReactDOM from "react-dom";


// function App() {
//   const [name, setName] = useState('hangfeng')
//   const [yy, setYy] = useState('hangfeng')

//   return <div>
//     <p>name: {name}</p>
//     <p>yy: {yy}</p>
//     <button onClick={() => setName(name + '1')}>click</button>
//     <button onClick={() => setYy(yy + '1')}>click</button>
//     butt
//   </div>;
// }


const valueKey = Symbol()

function useFormInput() {
  const [value, setValue] = useState(valueKey)

  return {
    value,
    onChange(e) {
      setValue(e.target.value)
      alert('hello')
    }
  }
}

function Form() {
  const name = useFormInput()

  return (
    <div>
      <input type="text" {...name} />
    </div>
  )
}

ReactDOM.render(<Form />, document.getElementById("root"));


