import React, { createContext, useState } from 'react';



const AuthContext = createContext(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));



  const value = {
    setUser,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextType => {
  const authContext = React.useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return authContext;
};
