import React, { createContext, useEffect, useState } from 'react';
import api from '../config/api';


const AuthContext = createContext(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/user/auth')
      .then(res => {
        setUser(res.data); // If the user is authenticated, store their information
      })
      .catch(err => {
        setUser(null); // If the user is not authenticated, set the user to null
      }).finally(()=>setLoading(false))
   
  }, []);

  const value = {
    setUser,
    user,
    loading
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const authContext = React.useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return authContext;
};
