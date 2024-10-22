import { useState } from "react"
import Comp from "./Comp";

function App() {
  const [value,setValue] = useState("3");
  return (
    <>
    <Comp/>
      <h1>SHORT CIRCUIT EVALUATION</h1>
      <h2>{value  && 0  &&(null || "Hello") }</h2>
    </>
  )
}

export default App
