import React from 'react'
import Box2 from './Box2';

export let arr = ["Apple","Banana","Orange","Kiwi","Pineapple","Guava","Grapes"];
function Box1() {
  return (
    <>
      <div className="box">
        <Box2 num={arr}/>
      </div>
    </>
  );
};

export default Box1;
