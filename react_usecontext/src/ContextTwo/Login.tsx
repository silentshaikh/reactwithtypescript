import React, { FormEvent, useContext, useState } from 'react'
import { ProvideCont } from './Context'
import type { ProfileUser } from './contentType';

function Login() {
    let contextData  = useContext(ProvideCont);
   if(!contextData){
    return <h1>Context Not Found </h1>
   }
   let {value,setValue,setList} = contextData;
   const onHandleForm = (e:FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       if(contextData?.value === ""){
           alert("Please Enter the User Name");
       }else{
        let userDta:ProfileUser = {id:new Date().getTime(),name:value};
           setList((prev:ProfileUser[]):ProfileUser[] => [...prev,userDta]);
           setValue("");
       }
   }
  return (
    <>
    <h1>LOGIN</h1>
    <form action="" onSubmit={onHandleForm}>
        <input type="text" name="" id="" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Login
