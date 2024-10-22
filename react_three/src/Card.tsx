interface Prop{
    userId:number,
    id:number,
    title:string,
    completed:boolean,
}

function Card({title}:Prop):JSX.Element {
  return (
    <>
     <div className="box">
        <p>{title}</p>
        </div> 
    </>
  )
}

export default Card
