import type { PokeCards } from "../Type/type";
function PokeCard({pokeCards,value}:PokeCards) {
  // seraching the pokemon cards
  const filtCardWithInput = pokeCards.filter((e) => {
    return e.name.toLowerCase().split(/\s+/).join("").includes(value.toLowerCase().split(/\s+/).join(""))
});
  return (
    <>
      {filtCardWithInput.map((e) => {
        // input is empty
        if(value === ""){
          if(e.id<51){
            return (
            
              <div key={e.id} className="card">
        <p className="call">HP <span>{e.stats[0].base_stat}</span></p>
      <img src={e.sprites.other.dream_world.front_default} alt={e.name}/>
      <h1>{e.name}</h1>
      <div className="typr">
          {e.types.map((e) => <p key={e.type.name}>{e.type.name}</p>)}
             </div>
     <div className="box">
      <div className="res">
          <strong>{e.stats[2].base_stat}</strong>
          <p>Attack</p>
      </div>
      <div className="res">
          <strong>{e.stats[4].base_stat}</strong>
          <p>Defence</p>
      </div>
      <div className="res">
          <strong>{e.stats[5].base_stat}</strong>
          <p>Speed</p>
      </div>
     </div>
         </div>
          );
          }
        }else{
          // if input has not empty
          return (
            
            <div key={e.id} className="card">
      <p className="call">HP <span>{e.stats[0].base_stat}</span></p>
    <img src={e.sprites.other.dream_world.front_default} alt={e.name}/>
    <h1>{e.name}</h1>
    <div className="typr">
        {e.types.map((e) => <p key={e.type.name}>{e.type.name}</p>)}
           </div>
   <div className="box">
    <div className="res">
        <strong>{e.stats[2].base_stat}</strong>
        <p>Attack</p>
    </div>
    <div className="res">
        <strong>{e.stats[4].base_stat}</strong>
        <p>Defence</p>
    </div>
    <div className="res">
        <strong>{e.stats[5].base_stat}</strong>
        <p>Speed</p>
    </div>
   </div>
       </div>
        );
        }
      })}
    </>
  )
}

export default PokeCard
