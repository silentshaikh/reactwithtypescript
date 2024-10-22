import React from 'react'
import { PropDrilling } from '../type'
import Box3 from './Box3'

function Box2({num}:PropDrilling) {
  return (
    <>
      <ul>
      <Box3 num={num}/>
      </ul>
    </>
  )
}

export default Box2
