import React, { useRef } from 'react'
import ChildComponent from './ChildComponent';

function ParentComponent() {
    let inputRef = useRef<HTMLInputElement>(null);
    let inputValueAvail = inputRef.current && inputRef.current.value;
  return (
    <>
      <ChildComponent inp={inputRef} content={inputValueAvail}/>
    </>
  )
}

export default ParentComponent
