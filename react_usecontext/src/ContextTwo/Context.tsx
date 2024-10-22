import {  createContext, useState } from "react"
import type { contentProvider, ContentType, ProfileUser } from "./contentType";



export let ProvideCont = createContext<ContentType | null>(null);

function Context({children}:contentProvider) {
    const [value,setValue]  = useState("")
    const [list,setList] = useState<ProfileUser[]>([]);
  return (
    <>
     <ProvideCont.Provider value={{value,setValue,list,setList}}>
    {children}
     </ProvideCont.Provider>
    </>
  )
}

export default Context
