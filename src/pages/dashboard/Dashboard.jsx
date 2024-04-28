import React, { useEffect, useState } from 'react';
import { FaUser } from "react-icons/fa";
import Calendar from './Calendar';

const Dashboard = () => {

  const [userDetails, setUserDetails] = useState({});

  const decodeToken = async () => {
    try{
      const token = localStorage.getItem('isAuthenticated');
      if(token){
        const tokenPayload = token.split('.')[1];
        const decodedTokenPayload = await JSON.parse(atob(tokenPayload));
        setUserDetails(decodedTokenPayload);
      }
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  useEffect(()=>{
    decodeToken();
  }, []);
    
  return (
    <div className='max-w-7xl mx-auto'>
      {/* ==========  Headers Section ========== */}
      <div className='flex justify-between items-center bg-gray-200 p-4'>
        <h1 className='font-bold text-lg'>Dashboard</h1>
        <input className='border border-gray-400 p-2 rounded' type="text" placeholder="Search..." />
        <div className='flex items-center'>
          <FaUser className='mr-2' />
          <p>{userDetails?.name}</p>
        </div>
      </div>

      {/* =========== Other Details in number ===========*/}
      <div className='flex bg-gray-100 p-4'>
        <div className='flex-1 p-2 text-center border border-gray-300 rounded'>
          <div className='text-xl font-semibold'>Student Number</div>
          <div className='text-3xl font-bold'>1234</div>
        </div>
        <div className='flex-1 p-2 text-center border border-gray-300 rounded'>
          <div className='text-xl font-semibold'>Teacher Number</div>
          <div className='text-3xl font-bold'>5678</div>
        </div>
        <div className='flex-1 p-2 text-center border border-gray-300 rounded'>
          <div className='text-xl font-semibold'>Other Number</div>
          <div className='text-3xl font-bold'>91011</div>
        </div>
        <div className='flex-1 p-2 text-center border border-gray-300 rounded'>
          <div className='text-xl font-semibold'>Other Number</div>
          <div className='text-3xl font-bold'>121314</div>
        </div>
      </div>

      {/* =========== Calendar Section ========== */}
      <div className='bg-white p-4 mt-4'>
        <Calendar />
      </div>

    </div>
  );
}

export default Dashboard;
