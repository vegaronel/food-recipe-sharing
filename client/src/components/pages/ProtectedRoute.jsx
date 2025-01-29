// ProtectedRoute.js
import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;