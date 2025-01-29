// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const checkAuth = async () => {
    try {
      const response = await axios.get('http://localhost:3000/auth/check', {
        withCredentials: true,
      });
      if (response.data.authenticated) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (error) {
      setAuth(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);