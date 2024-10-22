import React, { useContext } from 'react'
import { ProviderCont } from './Comp1'
import type { UserData } from '../type';

function UserProfile() {
    let contextHok:UserData = useContext(ProviderCont);
  return (
    <>
     <ul>
        <li>{contextHok.name}</li>
        <li>{contextHok.email}</li>
    </ul> 
    </>
  );
};
export default UserProfile;