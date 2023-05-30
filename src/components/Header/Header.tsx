import React from 'react';
import style from './Header.module.css';
import Logo from '../Logo/Logo';
import chatIcon from '../../assets/images/chat-icon.svg'
import { useAuthContext } from '../../context/useAuth';
import DefaultUserAvatar from '../DefaultUserAvatar/DefaultUserAvatar';

interface HeaderProps{
    avatarUrl:string
}
const Header: React.FC<HeaderProps> = ({ children}) => {
  const {user}=useAuthContext();
  
  return (
    <header className={style.headerContainer}>
      <div className={style.headerRight}>
      {user?.avatar ?  <img className={style.avatarIcon} src={user.avatar} alt="Avatar Icon" />:null}
      </div>
      <div className={style.headerMiddle}>
          <Logo/>
      </div>
      <div className={style.headerLeft}>
        <img src={chatIcon} alt="chat icon" />
          {children}
      </div>
    </header>
  );
};

export default Header;
