import { useState } from "react"

function Comp() {
    const [value1,setValue1] = useState(5);
    const [item,setItem] = useState<number[]>([])
    const func = () => {
        if(value1){
            setValue1(10);
            setItem([1,2,3,4,5])
        }
    }
  return (
    <>
      <h1 onClick={func}>{value1}</h1>
      <p>{item}</p>
    </>
  )
}

export default Comp
