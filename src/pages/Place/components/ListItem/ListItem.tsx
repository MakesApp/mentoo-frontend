import { useState } from 'react';
import style from './ListItem.module.css'
const ListItem = ({user,children}) => {
        const [isContainerMoved, setIsContainerMoved] = useState(false);

  const handleIconClick = () => {
    setIsContainerMoved(!isContainerMoved);
  };
  return (
  <li
        key={user.id}
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

              <img className={style.profileImg} src={user.profileImage} alt="profile image" />
              <div>
                  <span className={style.userName}>{user.fullName}</span>
                  <p className={style.idk}>idk</p>
              </div>

              </div>
               <div className={style.content}>{children}</div>
              </li>  )
}

export default ListItem