import React from 'react';
import List from '../List/List';
import pauseIcon from '../../../../assets/images/pause-icon.svg';
import Button from '../Button/Button';
import { useUpdateVolunteerListMutation } from '../../../../api/services/api';
import { usePlaceContext } from '../../context/placeContext';
import { IUser } from '../../../../types/IUser';

const MyVolunteers: React.FC = () => {
  const { mutateAsync } = useUpdateVolunteerListMutation();
  const { place, candidateVolunteers, myVolunteers } = usePlaceContext();
  const { _id: placeId } = place;

  const handleOnClick = async (e: React.MouseEvent, user: IUser) => {
    e.stopPropagation();
    const query = {
      candidateVolunteers: [...candidateVolunteers, user._id],
      myVolunteers: myVolunteers.filter(
        (volunteer) => volunteer._id !== user._id
      ),
    };
    await mutateAsync({ placeId: placeId, query });
  };

  return (
    <List users={myVolunteers}>
      {(user: IUser) => {
        return (
          <Button
            backgroundColor={'#792BA6'}
            handleOnClick={(e) => handleOnClick(e, user)}
          >
            <img src={pauseIcon} alt={'pause'} />
            <span>למועמדים שלי</span>
          </Button>
        );
      }}
    </List>
  );
};

export default MyVolunteers;
