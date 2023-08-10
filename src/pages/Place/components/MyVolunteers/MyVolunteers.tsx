import React from 'react';
import List from '../List/List';
import pauseIcon from '../../../../assets/images/pause-icon.svg';
import Button from '../Button/Button';
import { useUpdateVolunteerListMutation } from '../../../../api/services/api';
import Spinner from '../../../../components/Spinner/Spinner';
import { useAuthContext } from '../../../../context/useAuth';

interface MyVolunteersProps {
  myVolunteers: any;
  candidateVolunteers: any;
}
const MyVolunteers: React.FC<MyVolunteersProps> = ({
  myVolunteers,
  candidateVolunteers,
}) => {
  const { mutateAsync, isLoading: isMutationLoading } =
    useUpdateVolunteerListMutation();
  const { user,isLoading:isAuthLoading } = useAuthContext();
  const userId = user._id;
  const isLoading = isMutationLoading||isAuthLoading;


  const handleOnClick = async (e: React.MouseEvent, user) => {
    e.stopPropagation();
    const query = {
      candidateVolunteers: [...candidateVolunteers, user],
      myVolunteers: myVolunteers?.filter(
        (volunteer) => volunteer._id !== user._id
      ),
    };
    await mutateAsync({ userId: userId, query });
  };

  if (isLoading) return <Spinner />;

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
