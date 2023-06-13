import React, { ReactNode } from 'react';
import ListItem from '../ListItem/ListItem';
import style from './List.module.css';
interface User {
  id: string;
  profileImage: string;
  fullName: string;
}

interface ListProps {
  users: User[];
  children: ReactNode;
}

const List: React.FC<ListProps> = ({ users, children }) => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {users?.map((user) => (
          <ListItem key={user._id} user={user}>
            {children}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default List;
