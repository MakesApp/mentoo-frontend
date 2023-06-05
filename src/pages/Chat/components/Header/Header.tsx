import React from 'react';
import style from './Header.module.css';
import chatIcon from '../../../../assets/images/chat-icon.svg'
import arrowLeft from '../../../../assets/images/arrow-left.svg'
import { useAuthContext } from '../../../../context/useAuth';
import { Link } from 'react-router-dom';
import DefaultUserAvatar from '../../../../components/DefaultUserAvatar/DefaultUserAvatar';

interface HeaderProps{
    avatarUrl:string
}
const Header: React.FC<HeaderProps> = () => {
  const {user}=useAuthContext();
  
  return (
    <header className={style.headerContainer}>
      <div className={style.headerRight}>
      {user?.avatar ?  <img className={style.avatarIcon} src={user.avatar} alt="Avatar Icon" />:<></>}

      </div>
      <div className={style.headerMiddle}>
      </div>
      <div className={style.headerLeft}>
        <img src={chatIcon} alt="chat icon" />
          <Link to={'HOME'}>
            <img src={arrowLeft} alt="arrow left"/>
            </Link>
      </div>
    </header>
  );
};

export default Header;
