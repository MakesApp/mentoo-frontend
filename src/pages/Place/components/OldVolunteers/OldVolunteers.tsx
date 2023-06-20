import Button from '../Button/Button';
import List from '../List/List';
import vIcon from '../../../../assets/images/v-icon.svg';
import { usePlaceContext } from '../../context/placeContext';
import { useUpdateVolunteerListMutation } from '../../../../api/services/api';
import Spinner from '../../../../components/Spinner/Spinner';

const OldVolunteers: React.FC = () => {
  const { place,isLoading:isPlaceLoading } = usePlaceContext();
  const {oldVolunteers=[], myVolunteers=[]}=place||{};
  const { mutateAsync,isLoading:isMutationLoading } = useUpdateVolunteerListMutation();
  const placeId = place ? place._id : null;
  const isLoading=isPlaceLoading||isMutationLoading
  const accept = async (e: React.MouseEvent, user) => {
    e.stopPropagation()
    const query = {
      myVolunteers: [...myVolunteers, user],
      oldVolunteers: oldVolunteers?.filter(
        (volunteer) => volunteer._id !== user._id
      ),
    };
    await mutateAsync({ placeId: placeId, query });

  };


  if(isLoading||isMutationLoading)
  return <Spinner/>

  return  (
    <List users={oldVolunteers}>
      {(user) => (
        <Button
          backgroundColor={'#792BA6'}
          handleOnClick={(e) => accept(e, user)}
        >
          <img src={vIcon} alt={'v icon'} />
          <span>למתנדבים שלי</span>
        </Button>
      )}
    </List>
  );
};

export default OldVolunteers;
