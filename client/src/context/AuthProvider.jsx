import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Initialize auth state from localStorage
    const storedAuth = localStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  const checkAuth = async () => {
    try {
      const response = await axios.get('http://localhost:3000/auth/check', {
        withCredentials: true,
      });
      if (response.data.authenticated) {
        setAuth(true);
        localStorage.setItem('auth', JSON.stringify(true)); // Save to localStorage
      } else {
        setAuth(false);
        localStorage.removeItem('auth'); // Remove from localStorage if not authenticated
      }
    } catch (error) {
      setAuth(false);
      localStorage.removeItem('auth'); // Remove from localStorage on error
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, checkAuth }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);