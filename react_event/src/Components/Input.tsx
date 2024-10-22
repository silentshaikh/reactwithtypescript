import { ChangeEvent } from "react";

type InputType = {
    val:string;
    upVal:(e:string) => void
}
function Input(props:InputType) {   
  let handleInput =(e:ChangeEvent<HTMLInputElement>) => {
    props.upVal(e.target.value)
    console.log(e);
  }; 
  console.log('hello')
  return (
    <>
     <div className="inpCont">
     <input type="text" name="" id="" className="movieINput" placeholder="Enter a Movie Name " value={props.val} onChange={(e) => handleInput(e)} /> 
     </div>
    </>
  )
}

export default Input;
