import React, { FC, ReactNode } from 'react';
import style from './DefaultUserAvatar.module.css';

interface DefaultUserAvatarProps {
  children: ReactNode;
}

const DefaultUserAvatar: FC<DefaultUserAvatarProps> = ({ children }) => {
  return <div className={style.avatarContainer}>{children}</div>;
};

export default DefaultUserAvatar;
