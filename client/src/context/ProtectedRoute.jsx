import React from 'react';
import { useAuth } from './AuthProvider';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {

  // Check localStorage for auth state
  const storedAuth = localStorage.getItem('auth');
  const isAuthenticated = storedAuth ? JSON.parse(storedAuth) : false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;