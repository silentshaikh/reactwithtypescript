import { useState } from "react"

function Button() {
    const [btn,setBtn] = useState<boolean>(false);
    const updateBtn = () => {
        setBtn((prev:boolean):boolean => !prev);
    }
  return (
    <>
     <button onClick={updateBtn} style={{backgroundColor: btn ? "aquamarine": "red", position:"absolute",top:"7px",left:btn ? "62px" : "10px"}}>{btn ? "ON" : "OFF"}</button> 
    </>
  )
}

export default Button
