import React, { useEffect, useState } from 'react'
import ApiCont from './ApiCont'

function App() {
  const [count,setCount] = useState<number>(0);
  const [value,setValue] = useState<string>("")
  const onInc = () => {
    setCount(count+1);
  }
  const onDec = () => {
    setCount(count-1);
    // document.title = `Count :${count}`;
  }
  let countLessOne = count <1 ? 0 : count;

  //using pure Function
  // const documTitle = () =>{
    // document.title = `Count : ${countLessOne}`;
    // console.log(countLessOne)
  // }
  // documTitle()
  // const inpValue = () => {
  //   console.log(value)
  // };
  // inpValue()

  //using useEffect
  useEffect(() => {
    let timer =  setInterval(() => {
     document.title = `Count : ${countLessOne}`;
    }, 2000);
    // console.log(countLessOne)
    // console.log(value)
    // clean up function
    return () => clearInterval(timer)

  },[countLessOne]);
  const inputValue = (inp:string):string => {
    return inp;
  }
  useEffect(() => {
   let clrTimer =  setTimeout(() => {
      console.log(value);
    }, 2000);
    return () => clearTimeout(clrTimer)
  },[value]);

  return (
    <>
      <h1>{countLessOne}</h1>
      <button onClick={onInc}>Increment</button>
      <button onClick={onDec}>Decrement</button>
      <input type="text" name="" id="" value={value} onChange={(e) => setValue(e.target.value)}/>
      <p>{inputValue(value)}</p>
      {/* <ApiCont/> */}
    </>
  )
}

export default App
