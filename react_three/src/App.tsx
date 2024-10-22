import { useState } from "react"
import Card from "./Card"
import { arrList } from "./api"
import type { ArrList } from "./api"
function App() {
  const [item,setItem] = useState<ArrList[]>(arrList);
  // console.log(item.length)
  // console.log("hello")
  let sumID = item.reduce((p,c) => p+c.id ,0)
  return (
    <>
    <h1>{item.length}</h1>
    <h2>{sumID}</h2>
    {item.map((e) => <Card key={e.id} userId={e.userId} title={e.title} id={e.id} completed={e.completed}/>)}
    </>
  )
}

export default App
