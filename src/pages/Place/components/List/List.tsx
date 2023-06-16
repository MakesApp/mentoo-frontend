import React, { ReactNode } from 'react';
import { IUser } from '../../../../types/IUser';
import ListItem from '../ListItem/ListItem';
import style from './List.module.css';


interface ListProps {
  users: IUser[];
  children?: any;
}

const List: React.FC<ListProps> = ({ users, children }) => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {users?.map((user) => (
          <ListItem key={user._id} user={user}>
            {children(user)}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default List;
