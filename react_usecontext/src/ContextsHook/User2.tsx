import React from 'react'
import { UserData } from '../type'
import Comp1, { ProviderCont } from './Comp1';
import UserProfile from './UserProfile';

function User2() {
    let userDta2:UserData = {
        name:"Tom",
        email:"tom@gmail.com",
    };
  return (
    <>
      <Comp1 userData={userDta2}>
    <UserProfile/>
      </Comp1>
    </>
  );
};
export default User2;