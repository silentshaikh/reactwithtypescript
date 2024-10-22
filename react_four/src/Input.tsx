interface InputType{
    funcVal:string
    funcOne:(e:string) => void,
}
function Input({funcOne,funcVal}:InputType) {
    
   console.log("hello")
  return (
    <>
     <input type="text" name="" id="" value={funcVal} onChange={(e)=> funcOne(e.target.value)} /> 
    </>
  )
}

export default Input
