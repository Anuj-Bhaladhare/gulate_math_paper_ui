import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebaar from './Sidebaar';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (isAuthenticated) {
    return (
      <>
        <Sidebaar>
          <Outlet />
        </Sidebaar>
      </>
    );
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
