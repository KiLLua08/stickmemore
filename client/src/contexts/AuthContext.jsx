import React, { createContext, useState, useEffect } from 'react';
import { fetchUserData } from '../utils/api/fetchUser.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData(token).then(userData => {
        setUser(userData);
      }).catch(error => {
        console.error('Failed to fetch user data:', error);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
