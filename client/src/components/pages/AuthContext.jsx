import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    // Initialize state from localStorage
    return localStorage.getItem("auth") === "true";
  });

  const checkAuth = async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/check", {
        withCredentials: true,
      });
      if (response.data.authenticated) {
        setAuth(true);
        localStorage.setItem("auth", "true"); // Store authentication status
      } else {
        setAuth(false);
        localStorage.removeItem("auth"); // Clear authentication if not authenticated
      }
    } catch (error) {
      setAuth(false);
      localStorage.removeItem("auth");
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
