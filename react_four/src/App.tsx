import { useState } from "react";
import DisplayContent from "./DisplayContent"
import Input from "./Input"

function App() {
  const [values,setValue]= useState<string>("");
  return (
    <>
      <h1>hello</h1>
      <Input funcOne={setValue} funcVal={values}/>
      <DisplayContent funcDisp={values}/>
    </>
  )
}

export default App
