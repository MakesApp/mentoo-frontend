import { useState } from 'react';
import React, { ReactNode } from 'react';

import defaultAvatar from '../../../../assets/images/user-avatar.png'
import { IUser } from '../../../../types/IUser';
import style from './ListItem.module.css'
import { useAuthContext } from '../../../../context/useAuth';
import { Link, useHistory } from 'react-router-dom';
interface ListItemProps {
  user: IUser;
  children: (user: IUser) => ReactNode,
}
const ListItem: React.FC<ListItemProps>= ({user,children}) => {
        const [isContainerMoved, setIsContainerMoved] = useState(false);
        const {user:placeUserId}=useAuthContext()
const history=useHistory()
 
  const handleShowMore = (e) => {
    e.stopPropagation()
    setIsContainerMoved(!isContainerMoved);
  };
  const handleOnItemClick=(e)=>{
    e.stopPropagation()
    history.push(`/chat/${user._id}/${placeUserId._id}`)

  }
  const handleCloseIcon=(e)=>{
        e.stopPropagation()
setIsContainerMoved(!isContainerMoved)
  }
  return (
  <li
        key={user._id}
        className={style.container}>
          <button onClick={(e)=>handleOnItemClick(e)} className={style.listItem}>
        <div
       className={`${style.userDetailsContainer} ${isContainerMoved ? style.moveContainer : ''}`} >
           {isContainerMoved?<button className={style.closeIcon} onClick={(e)=>handleCloseIcon(e)}></button>:
            <ul className={style.icons} onClick={(e)=>{handleShowMore(e)}}>
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
               </button>
              </li> 
               )
}

export default ListItem