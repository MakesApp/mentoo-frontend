import React, { ReactNode } from 'react';
import { IUser } from '../../../../types/IUser';
import ListItem from '../ListItem/ListItem';
import style from './List.module.css';


interface ListProps {
  areOptionsDisabled?:boolean;
  users: IUser[];
  children?: any;
}

const List: React.FC<ListProps> = ({areOptionsDisabled=false, users, children }) => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {users?.map((user) => (
          <ListItem areOptionsDisabled={areOptionsDisabled} key={user._id} user={user}>
            {children}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default List;
