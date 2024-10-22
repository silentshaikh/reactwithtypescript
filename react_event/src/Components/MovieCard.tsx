type propObj = {
  imgsrc:string;
  title:string;
  lang:string;
  gen:string;
}

function MovieCard(props:propObj) {
  return (
    <>
        <div   className="movieCard">
    <p className="time"></p>
    <img src={props.imgsrc} alt="movie" />
   <div className="mtitle">
    <h2>{props.title}</h2>
    <p>{props.lang}</p>
    <p className="gen">{props.gen} </p>
   </div>
  </div>
    </>
  )
}

export default MovieCard
