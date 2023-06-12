import React from 'react';
import style from './Header.module.css';
import chatIcon from '../../../../assets/images/chat-icon.svg'
import arrowLeft from '../../../../assets/images/arrow-left.svg'
import userAvatar from '../../../../assets/images/user-avatar.png'
import { useAuthContext } from '../../../../context/useAuth';
import { Link } from 'react-router-dom';
import { getPlaceById } from '../../../../api/services/api';
import {useQuery} from 'react-query'
interface HeaderProps{
    avatarUrl:string
}

const Header = React.forwardRef((props: HeaderProps, ref: React.Ref<any>) => {
  const {user}=useAuthContext();
  const {placeId}=user;
  const {data:placeData} = placeId?useQuery(['places', placeId], getPlaceById):{};

  return (
    <header ref={ref} className={style.headerContainer}>
      <div className={style.headerRight}>
       <img className={style.avatarIcon} src={user?.avatar?user.avatar:userAvatar} alt="Avatar Icon" />
       <div>
         <h2 className={style.name}>{user?.fullName}</h2>
         {placeData&&<span className={style.placeName}>{placeData.place?.placeName}</span>}
       </div>
      </div>
      <div className={style.headerMiddle}>
      </div>
      <div className={style.headerLeft}>
        <img src={chatIcon} alt="chat icon" />
        <Link to={{pathname:"/"}}>
          <img src={arrowLeft} alt="arrow left"/>
        </Link>
      </div>
    </header>
  );
});

export default Header;
