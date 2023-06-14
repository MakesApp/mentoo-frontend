import Button from '../Button/Button';
import List from '../List/List';
import vIcon from '../../../../assets/images/v-icon.svg';
import closeIcon from '../../../../assets/images/close-icon.svg';
import { usePlaceContext } from '../../context/placeContext';
import { useUpdateVolunteerListMutation } from '../../../../api/services/api';

const CandidatesVolunteers: React.FC = () => {
  const { candidateVolunteers, myVolunteers, oldVolunteers, place } =
    usePlaceContext();
  const { mutateAsync } = useUpdateVolunteerListMutation();

  const { _id: placeId } = place;

  const accept = async (e,user) => {
    e.stopPropagation()
    const query = {
      myVolunteers: [...myVolunteers, user._id],
      candidateVolunteers: candidateVolunteers.filter(
        (volunteer) => volunteer._id !== user._id
      ),
    };
    await mutateAsync({ placeId: placeId, query });
  };
  const reject = async (e,user) => {
    e.stopPropagation()
    const query = {
      oldVolunteers: [...oldVolunteers, user._id],
      candidateVolunteers: candidateVolunteers.filter(
        (volunteer) => volunteer._id !== user._id
      ),
    };
    await mutateAsync({ placeId: placeId, query });
  };
  return (
    <List users={candidateVolunteers}>
      {(user) => (
        <>
          {' '}
          <Button
            backgroundColor={'#792BA6'}
            handleOnClick={(e) => accept(e,user)}
          >
            <img src={vIcon} alt={'v icon'} />
            <span>זה מנטו</span>
          </Button>
          <Button
            backgroundColor={'#B272CB'}
            handleOnClick={(e) => reject(e,user)}
          >
            <img src={closeIcon} alt={'close icon'} />
            <span>פעם אחרת</span>
          </Button>
        </>
      )}
    </List>
  );
};

export default CandidatesVolunteers;
