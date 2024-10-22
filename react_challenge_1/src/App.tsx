import React, { useState } from 'react'
import "./App.css"
function App() {
  const [count,setCount] = useState(0);
  const [value,setValue] = useState<number>(0);
  const onInc = () => {
    if(value>0){
      setCount((prev) => prev+value);
    }else{
      setCount((prev) => ++prev);
    }
  };
  const onDec = () => {
    if(value>0){
      setCount((prev) => prev-value);
    }else{
      setCount((prev) => prev--);
    }
  };
  const onReset = () => {
    setCount(0);
    setValue(0)
  }
  return (
    <>
      <div className="counter">
        <h2>{count < 1 ? 0 : count}</h2>
        <input type="number" name="" id="" min={0} value={value} onChange={(e) => setValue(Number(e.target.value))} />
        <button onClick={onInc}>Increment</button>
        <button onClick={onDec}>Decrement</button>
        <button onClick={onReset}>Reset</button>

      </div>
    </>
  )
}

export default App
