import React from 'react';
import List from '../List/List';
import pauseIcon from '../../../../assets/images/pause-icon.svg';
import Button from '../Button/Button';
import { useUpdateVolunteerListMutation } from '../../../../api/services/api';
import { usePlaceContext } from '../../context/placeContext';
import Spinner from '../../../../components/Spinner/Spinner';

const MyVolunteers: React.FC = () => {
  const { mutateAsync,isLoading:isMutationLoading } = useUpdateVolunteerListMutation();
  const { place, isLoading,setPlace } = usePlaceContext();
  const {candidateVolunteers=[], myVolunteers=[]}=place||{}
const placeId = place ? place._id : null;

  const handleOnClick = async (e: React.MouseEvent, user) => {
    e.stopPropagation();
    const query = {
      candidateVolunteers: [...candidateVolunteers, user],
      myVolunteers: myVolunteers?.filter(
        (volunteer) => volunteer._id !== user._id
      ),
    };
    await mutateAsync({ placeId: placeId, query });
    setPlace({...place,...query})
  };


  if(isLoading||isMutationLoading)
  return <Spinner/>

  return (
    <List users={myVolunteers}>
      {(user) => {
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
