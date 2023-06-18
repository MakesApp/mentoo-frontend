import React, { createContext, ReactNode, useEffect, useState } from 'react';
import api from '../config/api';
import { useQuery } from 'react-query';
import { getUserUnreadMessages } from '../api/services/api';
import { IUser } from '../types/IUser';
import Spinner from '../components/Spinner/Spinner';

interface AuthContextProps {
  setUser: React.Dispatch<React.SetStateAction<null>>;
  user: null | any;
  loading: boolean;
  hasUnreadMessages: boolean | undefined;
}
interface AuthProviderProps{
  children:ReactNode
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | any>(null);
  const [hasUnreadMessages, setHasUnreadMessages] = useState<boolean | undefined>();
  const [loading, setLoading] = useState(true);
  const { data,isLoading } = useQuery('unreadMessages', getUserUnreadMessages, { enabled: !!user });

  

  useEffect(() => {
    if (data) setHasUnreadMessages(data.hasUnreadMessages);
  }, [data]);

  useEffect(() => {
    api
      .get('/user/auth')
      .then((res) => {
        setUser(res.data); // If the user is authenticated, store their information
      })
      .catch(() => {
        setUser(null); // If the user is not authenticated, set the user to null
      })
      .finally(() => setLoading(false));
  }, []);

   if(isLoading)
  return <Spinner/>;
  const value: AuthContextProps = {
    setUser,
    user,
    loading,
    hasUnreadMessages,
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
