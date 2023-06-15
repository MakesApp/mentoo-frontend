import React, { ReactNode, useState } from 'react';
import style from './Header.module.css';
import Logo from '../Logo/Logo';
import { useAuthContext } from '../../context/useAuth';
import defaultAvatar from '../../assets/images/user-avatar.png';
import { useLogoutMutation } from '../../api/services/api';
import ChatWithNotification from '../ChatWithNotification/ChatWithNotification';

interface HeaderProps {
  children?: ReactNode| undefined;
}
const Header: React.FC<HeaderProps> = ({ children }) => {
  const { user, setUser } = useAuthContext();
  const logoutMutation = useLogoutMutation();

  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const handleOnClick = () => {
    setLogoutVisible(!isLogoutVisible);
  };
  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header className={style.headerContainer}>
      <div className={style.headerRight}>
        <div className={style.avatarContainer}>
          <button onClick={handleOnClick}>
            <img
              className={style.avatarIcon}
              src={user?.avatar ? user.avatar : defaultAvatar}
              alt="Avatar Icon"
            />
          </button>
          {isLogoutVisible && (
            <button className={style.logoutBtn} onClick={handleLogout}>
              להתנתק
            </button>
          )}
        </div>
      </div>
      <div className={style.headerMiddle}>
        <Logo />
      </div>
      <div className={style.headerLeft}>
       {user?.role!=='place'&& <ChatWithNotification />}
        {children}
      </div>
    </header>
  );
};

export default Header;
