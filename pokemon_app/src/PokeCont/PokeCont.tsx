import {useEffect, useState } from 'react'
import type {ApiType,Pokaemon} from '../Type/type';
import PokeCard from '../PokeCard/PokeCard';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Form from '../Form/Form';
import { pokaemonApi } from '../Apis/api';
function PokeCont() {
    //state for poke api
    const [pokeCards,setPokeCards] = useState<Pokaemon[]>([]);
    //sate for error
    const [err,setErr] = useState<boolean>(false);
    //state for loading
    const [load,setLoad] = useState<boolean>(false);
    // state for input value
    const [value,setValue] = useState("");
    // function for handle the pokemon api 
    const pokeCardGen = async () => {
        setLoad(true);
        setErr(false);
        try {
            let fetchApi = await fetch(pokaemonApi);
        let fetchData:ApiType = await fetchApi.json();
        let getResult = fetchData.results.map( async (e) => {
            let pokeFetch = await fetch(e.url);
            let pokeData = await pokeFetch.json();
            return pokeData;
        });
        let manageAllPromise:Pokaemon[] = await Promise.all(getResult)
        setPokeCards(manageAllPromise);
    } catch (error) {
        setErr(true)
    }finally{
        setLoad(false)
    }
};  
    // if pokemon card is not available
    let notAvailable = pokeCards.find((e) => {
        return e.name.toLowerCase().split(/\s+/).join("").includes(value.toLowerCase().split(/\s+/).join(""))
    })
    // run the function with the change state of input
    useEffect(() => {
        //add debounce in search input
          let debounce =   setTimeout(() => {
                pokeCardGen();
            }, 500);
            //return a clean function for clear the timeout 
            return () => clearTimeout(debounce)
    },[value]);
    
  if(load){
    // add loading if the will be resolving slowly
   return (
    <>
     <section className='poke-cont'>
                <Form value={value}  setValue={setValue}/>
                <Loading/>
        </section>
    </>
   );
  }else{
    return (
        <>
                <Form value={value}  setValue={setValue}/>
             <section className='poke-cont'>
            <div className="container">
            {!notAvailable || err ? <Error/> : <PokeCard  pokeCards={pokeCards} value={value}/>}
                 </div>
        </section>
        </>
      )
  }
}

export default PokeCont
