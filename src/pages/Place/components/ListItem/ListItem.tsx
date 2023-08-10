import { useState } from 'react';
import React, { ReactNode } from 'react';

import defaultAvatar from '../../../../assets/images/user-avatar.png';
import { IUser } from '../../../../types/IUser';
import style from './ListItem.module.css';
import { useHistory } from 'react-router-dom';

interface ListItemProps {
  user: IUser;
  children?: any;
  areOptionsDisabled?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  areOptionsDisabled,
  user,
  children,
}) => {
  const [isContainerMoved, setIsContainerMoved] = useState(false);
  const history = useHistory();

  const handleShowMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsContainerMoved(!isContainerMoved);
  };

  const handleOnItemClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    history.push(`/chat/${user._id}`);
  };

  const handleCloseIcon = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsContainerMoved(!isContainerMoved);
  };

  return (
    <li key={user._id} className={style.container}>
      <button onClick={handleOnItemClick} className={style.listItem}>
        <div
          className={`${style.userDetailsContainer} ${
            isContainerMoved ? style.moveContainer : ''
          }`}
        >
          {!areOptionsDisabled &&
            (isContainerMoved ? (
              <button
                className={style.closeIcon}
                onClick={handleCloseIcon}
              ></button>
            ) : (
              <button onClick={handleShowMore}>
                <ul className={style.icons}>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </button>
            ))}
          <img
            className={style.profileImg}
            src={user?.avatar ? user.avatar : defaultAvatar}
            alt="user avatar"
          />
          <div>
            <span className={style.userName}>{user.fullName}</span>
          </div>
          {user?.hasUnreadMessages && <div className={style.redDot}></div>}
        </div>
        <div
          className={`${style.content} ${isContainerMoved && style.isVisible} `}
        >
          {children(user)}
        </div>
      </button>
    </li>
  );
};

export default ListItem;
