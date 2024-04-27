import React, { useEffect, useState } from 'react';
import useUserDetails from "./hook";

const UserDetails = () => {

  const [{ getUserDetails }] = useUserDetails();
  const [userDetails, setUserDetails] = useState({});
  
  const decodeToken = async () => {
    try{
      const token = localStorage.getItem('isAuthenticated');
      if(token){
        const tokenPayload = token.split('.')[1];
        const decodedTokenPayload = await JSON.parse(atob(tokenPayload));
        return decodedTokenPayload?.email;
      }
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  useEffect( () => {
    decodeToken().then(  (res) => {
      getUserDetails(res).then( res => setUserDetails(res)).catch( err => console.log(err));
    }).catch( err => console.log(err));
  }, []);

  console.log("userDetails", userDetails);

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {`${userDetails?.firstName} ${userDetails?.lastName}`}</p>
      <p>Email: {userDetails?.email}</p>
      <p>Role: {userDetails?.role}</p>
    </div>
  );

}

export default UserDetails;