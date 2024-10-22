// import { useState } from "react";
import "./App.css";
import { MovieList } from "./movieapi";
import MovieCard from "./MovieCard";
// import ProfileCard from "./ProfileCard";
import type { MoviesList } from "./movieapi";
const name1:JSX.Element = <h1>MOVIE LIST</h1>;
function App() {
  // const [movie,upMovie] = useState<MoviesList[]>([]);
 
  console.log("hello");

  return (
    <>
      {/* {name1} */}
      <button>Search</button>
      <div className="container">
        {MovieList.map((e,i) => {
          return <MovieCard imgsrc={e.img} lang={e.lang} title={e.name} gen={e.gen} key={i}/>
        })}
      </div>

      {/* <ProfileCard name="Alice" age={34} greet={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>}>
       <>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, beatae. Odit, ratione rem? Aliquam asperiores aliquid, ipsam impedit repellat soluta!</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repudiandae aspernatur modi quam quo dolores culpa, sit cumque incidunt necessitatibus consectetur! Repellendus animi sapiente incidunt nemo labore ut consectetur quibusdam?</p>
       </>
        

      </ProfileCard> */}
    </>
  )
}

export default App;