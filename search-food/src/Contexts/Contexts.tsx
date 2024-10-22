import { createContext, useState } from 'react';
import type { FoodList,ContextTypes,ContextsChild } from '../type';
import foodApi from '../Apis/api';
export let CreteContext = createContext<ContextTypes|null>(null);
// map the foodApi
let mapFood = [... new Set(foodApi.map((e) => e.headOne)),"ALL"];
function Contexts({children}:ContextsChild) {
  //state for handle fodd api
    const [food,updatFood] = useState<FoodList[]>(foodApi);
    // filtering the card
    const filterFood = (category:string) => {
      if(category === "ALL"){
          // if the category is all
            updatFood(foodApi);
        }
        else{
          //filter the food list
            let filtFods = foodApi.filter((e) => {
                return e.headOne === category;
            });
            updatFood(filtFods);
        };
    };
  return (
    <>
      <CreteContext.Provider value={{food,mapFood,filterFood}}>
        {children}
      </CreteContext.Provider>
    </>
  )
}

export default Contexts
