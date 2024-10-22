import { useEffect, useState } from 'react'
import { pokeApi } from '../Api/api';
import type { PokeType } from '../Api/api';
import PokeCard from '../PokeCard/PokeCard';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Form from '../Form/Form';
function PokeContainer() {
    const [poke,setPoke] = useState<PokeType>({namePoke:"",imgPoke:"",defencePoke:0,speedPoke:0,attckPoke:0,typePoke:[],hpPoke:0});
    const [err,setErr] = useState<boolean>(false);
    const [load,setLoad] = useState<boolean>(false);
    const [value,setValue] = useState<string>("");
    const pokeCardGen = async () => {
        setLoad(true)
        setErr(false)
        try {
            let fetchApi = await fetch(`${pokeApi}/${value}`);
        let fetchData = await fetchApi.json();
        let pokeObj:PokeType = {
            hpPoke:fetchData.stats[0].base_stat,
            namePoke:fetchData.name,
            imgPoke:fetchData.sprites.other.dream_world.front_default,
            attckPoke:fetchData.stats[2].base_stat,
            defencePoke:fetchData.stats[1].base_stat,
            speedPoke:fetchData.stats[5].base_stat,
            typePoke:fetchData.types,
        }
        setPoke(pokeObj);
        console.log(fetchData)
    } catch (error) {
        setErr(true);
    }finally{
        setLoad(false);
    }

    }
    useEffect(() => {
       let setTimer =  setTimeout(() => {
            pokeCardGen();
        }, 2000);
        return () => clearTimeout(setTimer);
    },[value]);
    
    let {namePoke,imgPoke,defencePoke,attckPoke,speedPoke,typePoke, hpPoke} = poke;
  if(load){
   return (
    <>
     <section className='poke-cont'>
                <Form value={value} setValue={setValue}/>
                <Loading/>
        </section>
    </>
   );
  }else{
    return (
        <>
             <section className='poke-cont'>
                <Form value={value} setValue={setValue}/>
            <div className="container">
                {err ? <Error/> : <PokeCard namePoke={namePoke} imgPoke={imgPoke} attckPoke={attckPoke} defencePoke={defencePoke} typePoke={typePoke} speedPoke={speedPoke} hpPoke={hpPoke}/>}
                 </div>
        </section>
        </>
      )
  }
}

export default PokeContainer
