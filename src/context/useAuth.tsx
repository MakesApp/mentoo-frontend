import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { authUser, getUserUnreadMessages } from '../api/services/api';

interface AuthContextProps {
  user: null | any;
  isLoading: boolean;
  hasUnreadMessages: boolean | undefined;
}
interface AuthProviderProps{
  children:ReactNode
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const token=localStorage.getItem('token')
console.log(token);

const { data: userData, isLoading: isAuthLoading } = useQuery('auth', authUser);  
const { data:unredMessagesData,isLoading:unredMessagesLoading } = useQuery('unreadMessages', getUserUnreadMessages, { enabled: !!userData });

  const value: AuthContextProps = {
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
