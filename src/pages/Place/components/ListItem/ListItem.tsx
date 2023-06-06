import { useState } from 'react';
import React, { ReactNode } from 'react';

import defaultAvatar from '../../../../assets/images/user-avatar.png'
import { IUser } from '../../../../types/IUser';
import style from './ListItem.module.css'
interface ListItemProps {
  user: IUser;
  children: (user: IUser) => ReactNode,
}
const ListItem: React.FC<ListItemProps>= ({user,children}) => {
        const [isContainerMoved, setIsContainerMoved] = useState(false);

  const handleIconClick = () => {
    setIsContainerMoved(!isContainerMoved);
  };
  return (
  <li
        key={user._id}
        className={style.listItem}>
        <div
       className={`${style.userDetailsContainer} ${isContainerMoved ? style.moveContainer : ''}`} >
           {isContainerMoved?<button className={style.closeIcon} onClick={()=>setIsContainerMoved(!isContainerMoved)}></button>:
            <ul className={style.icons} onClick={()=>{handleIconClick()}}>
              <li></li>
              <li></li>
              <li></li>
            </ul>
}

          <img className={style.profileImg} src={user?.avatar?user.avatar:defaultAvatar} alt="user avatar" />
              <div>
                  <span className={style.userName}>{user.fullName}</span>
              </div>

              </div>
               <div className={`${style.content} ${isContainerMoved && style.isVisible} `}>{children(user)}</div>
              </li>  )
}

export default ListItem