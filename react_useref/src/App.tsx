import { FormEvent, useEffect, useRef, useState } from 'react'
import './App.css'
interface Album{
  albumId:number;
  id:number;
  title:string;
  url:string;
  thumbnailUrl:string;
};
function App() {
  // const [item,setItem] = useState<string>("")
  let inputRef = useRef<HTMLInputElement>(null);
//  useEffect(() => {
//   const fetchApi = async () => {
//     let api = await fetch('https://jsonplaceholder.typicode.com/photos');
//     let getData =await api.json();
//     setItem(getData);
//   };
//   fetchApi()
//  },[inputRef.current?.value]);
//   const onHandleForm = (e:FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if(inputRef.current){
//       console.log(inputRef.current.value)
//     }
//   };
useEffect(() => {
  if(inputRef.current){
    inputRef.current.focus()
  }
},[])
const onSubmitForm = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault();
 if(inputRef.current){
  console.log(inputRef.current.value)
  // console.log(item)
  
 }
//  formRef.current?.focus()
}
console.log("re-render")
  return (
    <>
    <form action="" onSubmit={onSubmitForm}>
      <input type="text" name="" id="" ref={inputRef}/>
      </form>
      {/* 
      <ol>
        {item.filter((e) => e.title.toLowerCase().split(/\s+/).join("").includes((inputRef.current?.value.toLowerCase().split(/\s+/).join("")))).map((e) => <li key={e.id}>{e.title}</li>)}
      </ol> */}
    </>
  )
}

export default App
