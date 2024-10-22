import { createContext, useContext, useEffect, useState } from "react";
import { Album, contextType } from "../type";
let CreteContext = createContext<Album[]>([]);
function Contexts({children}:contextType) {
    const [album,setAlbum] = useState<Album[]>([]);
    const handleApi = async () => {
        let fetchApi = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        let jsonData:Album[] =await fetchApi.json();
        setAlbum(jsonData);   
    };
    useEffect(() => {
        handleApi();
    },[]);
  return (
    <>
     <CreteContext.Provider value={album}>
        {children}
        </CreteContext.Provider> 
    </>
  )
};
export default Contexts;
const useGLobalContext = () => {
    return useContext(CreteContext);
};
export {useGLobalContext};