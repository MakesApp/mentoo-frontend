import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { authUser, getUserUnreadMessages } from '../api/services/api';
import { extractTokenFromSetCookie, getCookieValue } from '../utils/utils';

interface AuthContextProps {
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

const [isAuthenticated,setIsAuthenticated]=useState(localStorage.getItem('isAuthenticated')==='true'|| false)
const { data: userData, isLoading: isAuthLoading } = useQuery('auth', authUser,{enabled:isAuthenticated});  
const { data:unredMessagesData,isLoading:unredMessagesLoading } = useQuery('unreadMessages', getUserUnreadMessages, { enabled: !!userData });

  const value: AuthContextProps = {
    user:userData,
    isLoading:isAuthLoading,
    hasUnreadMessages:unredMessagesData?.hasUnreadMessages,
    setIsAuthenticated:setIsAuthenticated
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
