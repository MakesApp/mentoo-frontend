import Button from '../Button/Button';
import List from '../List/List';
import vIcon from '../../../../assets/images/v-icon.svg';
import closeIcon from '../../../../assets/images/close-icon.svg';
import { usePlaceContext } from '../../context/placeContext';
import { useUpdateVolunteerListMutation } from '../../../../api/services/api';
import Spinner from '../../../../components/Spinner/Spinner';

const CandidatesVolunteers: React.FC = () => {
  const {  place,isLoading,setPlace } =
    usePlaceContext();
    const {candidateVolunteers=[], myVolunteers=[], oldVolunteers=[]}=place||{};
  const { mutateAsync,isLoading:isMutationLoading } = useUpdateVolunteerListMutation();

const placeId = place ? place._id : null;

  const accept = async (e: React.MouseEvent, user: any) => {
    e.stopPropagation();
    
    const query = {
      myVolunteers: [...myVolunteers, user._id],
      candidateVolunteers: candidateVolunteers.filter(
        (volunteer: any) => volunteer._id !== user._id
      ),
    };

    await mutateAsync({ placeId: placeId, query });
    setPlace({...place,...query})
  };
  const reject = async (e: React.MouseEvent, user: any) => {
    e.stopPropagation();
    const query = {
      oldVolunteers: [...oldVolunteers, user],
      candidateVolunteers: candidateVolunteers.filter(
        (volunteer: any) => volunteer._id !== user._id
      ),
    };
    await mutateAsync({ placeId: placeId, query });
    setPlace({...place,...query})
  };

  if(isMutationLoading||isLoading)
  return <Spinner/>

  return (
    <List users={candidateVolunteers}>
      {(user: any) => (
        <>
          <Button
            backgroundColor={'#792BA6'}
            handleOnClick={(e) => accept(e, user)}
          >
            <img src={vIcon} alt={'v icon'} />
            <span>זה מנטו</span>
          </Button>
          <Button
            backgroundColor={'#B272CB'}
            handleOnClick={(e) => reject(e, user)}
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
