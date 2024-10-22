import React, { RefObject } from 'react'
interface ChildProp{
    inp:RefObject<HTMLInputElement>;
    content:string | null;
}
function ChildComponent({inp,content}:ChildProp) {
  return (
    <>
      <input type="text" name="" id="" ref={inp} />
      <p>{content}</p>
    </>
  )
}

export default ChildComponent;
