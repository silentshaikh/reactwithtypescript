import { useState } from "react"
import MovieCard from "./Components/MovieCard";
import { MovieList } from "./utilities/movieapi";
import "./App.css"
import Input from "./Components/Input";
function App() {
  const [value,upValue] = useState<string>("");
  const searchValue = (e:string) => {
    upValue(e);
    
  }
  return (
    <>
    <Input val={value} upVal={searchValue}/>
      <div className="container">
      {MovieList.filter((e) => e.name.toLowerCase().trim().includes(value.toLowerCase().trim())).map((e,i) => {
       return  <MovieCard key={i} title={e.name} imgsrc={e.img} gen={e.gen} lang={e.lang}/>
      })}
      </div>
    </>
  )
}

export default App
