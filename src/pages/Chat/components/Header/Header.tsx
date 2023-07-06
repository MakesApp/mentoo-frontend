import React from 'react';
import style from './Header.module.css';
import arrowLeft from '../../../../assets/images/arrow-left.svg';
import userAvatar from '../../../../assets/images/user-avatar.png';
import { Link } from 'react-router-dom';
import ChatWithNotification from '../../../../components/ChatWithNotification/ChatWithNotification';
import { IUser } from '../../../../types/IUser';
import { useAuthContext } from '../../../../context/useAuth';

interface HeaderProps {
    user: IUser; 
  ref: React.Ref<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = React.forwardRef((props, ref) => {
  const {user}=props;
  const {user:authUser}=useAuthContext()
  
  return (
    <header ref={ref} className={style.headerContainer}>
      <div className={style.headerRight}>
        <img
          className={style.avatarIcon}
          src={user?.avatar || userAvatar}
          alt="Avatar Icon"
        />
        <div>
          <h2 className={style.name}>{user?.fullName}</h2>
          {user.placeId && (
            <span className={style.placeName}>
              {user.placeId?.placeName}
            </span>
          )}
        </div>
      </div>
      <div className={style.headerMiddle}></div>
      <div className={style.headerLeft}>
        {authUser?.role !== 'place' && <ChatWithNotification />}
        <Link to={{ pathname: '/' }}>
          <img src={arrowLeft} alt="arrow left" />
        </Link>
      </div>
    </header>
  );
});


export default Header;
