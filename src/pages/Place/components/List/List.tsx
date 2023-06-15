import React, { ReactNode } from 'react';
import ListItem from '../ListItem/ListItem';
import style from './List.module.css';

interface IUser {
  _id: string;
  email: string;
  password: string;
  role: string;
  profileImage: string;
  fullName: string;
}

interface ListProps {
  users: IUser[];
  children: (user: IUser) => ReactNode;
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
