import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebaar from './Sidebaar';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (isAuthenticated) {
    return (
      <div className="flex">
        <Sidebaar />
        <div className="flex-grow p-4">
          <Outlet />
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
