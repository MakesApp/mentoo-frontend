import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { authUser, getUserUnreadMessages } from '../api/services/api';

interface AuthContextProps {
  isAuthenticated: boolean;
  user: null | any;
  isLoading: boolean;
  hasUnreadMessages: boolean | undefined;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthProviderProps{
  children:ReactNode
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
const [isAuthenticated,setIsAuthenticated]=useState(Boolean(localStorage.getItem('token')))
const { data: userData, isLoading: isAuthLoading } = useQuery('auth', authUser);  
const { data:unredMessagesData,isLoading:unredMessagesLoading } = useQuery('unreadMessages', getUserUnreadMessages, { enabled: !!userData });
console.log('====================================');
console.log(unredMessagesData);
console.log('====================================');
  const value: AuthContextProps = {
    isAuthenticated:isAuthenticated,
    setIsAuthenticated:setIsAuthenticated,
    user:userData,
    isLoading:isAuthLoading,
    hasUnreadMessages:unredMessagesData?.hasUnreadMessages,
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
