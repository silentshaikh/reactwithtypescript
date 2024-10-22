import React from 'react'
import type{ PropDrilling } from '../type'
import { arr } from './Box1'
function Box3({num}:PropDrilling) {
  return (
    <>
     {num.map((e,i) => {
        return <li key={i}>{e}</li>
     })}
    </>
  );
}

export default Box3
