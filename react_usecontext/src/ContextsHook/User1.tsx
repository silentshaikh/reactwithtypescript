import React from 'react'
import { UserData } from '../type'
import Comp1 from './Comp1'
import UserProfile from './UserProfile'

function User1() {
      let userDta:UserData = {
        name:"Sam",
        email:"sam@gmail.com",
    };
  return (
    <>
    <Comp1 userData={userDta}>
     <UserProfile/>
</Comp1>
    </>
  );
};
export default User1;