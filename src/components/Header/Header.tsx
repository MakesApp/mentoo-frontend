import React, { ReactNode, useState } from 'react';
import style from './Header.module.css';
import Logo from '../Logo/Logo';
import { useAuthContext } from '../../context/useAuth';
import defaultAvatar from '../../assets/images/user-avatar.png';
import ChatWithNotification from '../ChatWithNotification/ChatWithNotification';
import { LOGIN_PAGE } from '../../routes/routePath';
import { useHistory } from 'react-router-dom';

interface HeaderProps {
  children?: ReactNode | undefined;
}
const Header: React.FC<HeaderProps> = ({ children }) => {
  const { user, setIsAuthenticated } = useAuthContext();
  const history = useHistory();

  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const handleOnClick = () => {
    setLogoutVisible(!isLogoutVisible);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    history.push(LOGIN_PAGE);
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
              התנתקות{' '}
            </button>
          )}
        </div>
      </div>
      <div className={style.headerMiddle}>
        <Logo />
      </div>
      <div className={style.headerLeft}>
        {user?.role !== 'place' && <ChatWithNotification />}
        {children}
      </div>
    </header>
  );
};

export default Header;
