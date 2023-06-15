import Button from '../Button/Button';
import List from '../List/List';
import vIcon from '../../../../assets/images/v-icon.svg';
import { usePlaceContext } from '../../context/placeContext';
import { useUpdateVolunteerListMutation } from '../../../../api/services/api';
import { IUser } from '../../../../types/IUser';

const OldVolunteers: React.FC = () => {
  const { oldVolunteers, myVolunteers, place } = usePlaceContext();
  const { mutateAsync } = useUpdateVolunteerListMutation();
  const { _id: placeId } = place;

  const accept = async (e: React.MouseEvent, user: IUser) => {
    e.stopPropagation();
    const query = {
      myVolunteers: [...myVolunteers, user._id],
      oldVolunteers: oldVolunteers.filter(
        (volunteer) => volunteer._id !== user._id
      ),
    };
    await mutateAsync({ placeId: placeId, query });
  };

  return (
    <List users={oldVolunteers}>
      {(user: IUser) => (
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
