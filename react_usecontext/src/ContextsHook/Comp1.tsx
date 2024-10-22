import React, { createContext } from 'react'
import type { Contexts,UserData } from '../type';
export let ProviderCont = createContext<UserData>({name:"",email:""});
function Comp1({children,userData}:Contexts) {

  return (
    <>
     <ProviderCont.Provider value={userData}>{children}</ProviderCont.Provider> 
    </>
  )
}

export default Comp1
