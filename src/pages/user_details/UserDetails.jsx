import React, { useEffect } from 'react';
import useUserDetails from "./hook";

const UserDetails = () => {

  const [{ getUserDetails }] = useUserDetails();

  useEffect( async () => {
    const token = localStorage.getItem('isAuthenticated');
    if (token) {
      const tokenPayload = token.split('.')[1];
      try {
        const decodedTokenPayload = JSON.parse(atob(tokenPayload));
        const email = decodedTokenPayload.email;
        getUserDetails(email);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, [getUserDetails]);
  

  return (
    <div>UserDetails</div>
  );

}

export default UserDetails;