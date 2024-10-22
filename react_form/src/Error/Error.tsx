import React from 'react'
import type { Error } from '../Type/type'

function Error({error}:Error) {
  return (
    <>
      <p style={{color:"red",width:"40vw",textAlign:"center"}}>{error}</p>
    </>
  )
}

export default Error
