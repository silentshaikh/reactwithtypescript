import { PokeType } from '../Api/api'
function PokeCard({namePoke,imgPoke,speedPoke,attckPoke,defencePoke,typePoke,hpPoke}:PokeType) {
  return (
    <>
      <div className="card">
      <p className="call">HP <span>{hpPoke}</span></p>
    <img src={imgPoke} alt="pokaemon"/>
    <h1>{namePoke.toUpperCase()}</h1>
    <div className="typr">
        {typePoke.map((e) => <p>{e.type.name}</p>)}
    </div>
   <div className="box">
    <div className="res">
        <strong>{attckPoke}</strong>
        <p>Attack</p>
    </div>
    <div className="res">
        <strong>{defencePoke}</strong>
        <p>Defence</p>
    </div>
    <div className="res">
        <strong>{speedPoke}</strong>
        <p>Speed</p>
    </div>
   </div>
       </div>
    </>
  )
}

export default PokeCard
