import React, { useContext } from 'react'
import { ProvideCont } from './Context'

function Profle() {
  let DataContext = useContext(ProvideCont)
  if(DataContext?.list.length === 0){
    return <h1>User - Data is not Available</h1>
  }else{
    return (
      <>
        <h1>USER - PROFILE</h1>
        <ol>
        {DataContext?.list.map((e) => {
          return <li key={e.id}>{e.name}</li>
        })}
        </ol>
      </>
    )
  }
}

export default Profle
