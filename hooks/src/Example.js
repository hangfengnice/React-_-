import React, { useState, createContext, useContext} from 'react'

const CounterContext = createContext()

function Counter() {
  let count = useContext(CounterContext)
  return <h2>{count}</h2>
}
function Example() {
  let [count, setCount] = useState(0)
  return (
    <div>
      <p>you have {count} times</p>
      <button onClick={() => setCount(count + 1)}>clikc</button>
      <CounterContext.Provider value={count}>
        <Counter />
      </CounterContext.Provider>
    </div>
  )
}

export default Example
