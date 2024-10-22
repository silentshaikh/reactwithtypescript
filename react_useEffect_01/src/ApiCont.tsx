import { useEffect, useState } from "react";
import type { Album } from "./type"

function ApiCont() {
    const [item,setItem] = useState<Album[]>([]);
    useEffect(() => {
        const fetchData =async ():Promise<void> => {
            try {
                let apiData = await fetch(`https://jsonplaceholder.typicode.com/photos`);
                let jsonData:Album[] = await apiData.json();
            setItem(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    },[])
    console.log("hello")
  return (
    <>
        {item.map((e) => {
            return(
                <img key={e.id} src={e.thumbnailUrl} alt={e.title.slice(0,5)} />
            );
        })}
    </>
  )
}

export default ApiCont
