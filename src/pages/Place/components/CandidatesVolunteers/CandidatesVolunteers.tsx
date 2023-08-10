import Button from '../Button/Button';
import List from '../List/List';
import vIcon from '../../../../assets/images/v-icon.svg';
import closeIcon from '../../../../assets/images/close-icon.svg';
import { useUpdateVolunteerListMutation } from '../../../../api/services/api';
import Spinner from '../../../../components/Spinner/Spinner';
import { useAuthContext } from '../../../../context/useAuth';

interface CandidatesVolunteersProps {
  myVolunteers: any;
  candidateVolunteers: any;
  oldVolunteers: any;
}
const CandidatesVolunteers: React.FC<CandidatesVolunteersProps> = ({
  oldVolunteers,
  myVolunteers,
  candidateVolunteers,
}) => {
  const { mutateAsync, isLoading: isMutationLoading } =
    useUpdateVolunteerListMutation();
  const { user ,isLoading:isAuthLoading} = useAuthContext();
  const userId = user._id;
  const isLoading = isMutationLoading||isAuthLoading;

  const accept = async (e: React.MouseEvent, user: any) => {
    e.stopPropagation();

    const query = {
      myVolunteers: [...myVolunteers, user._id],
      candidateVolunteers: candidateVolunteers.filter(
        (volunteer: any) => volunteer._id !== user._id
      ),
    };

    await mutateAsync({ userId: userId, query });
  };
  const reject = async (e: React.MouseEvent, user: any) => {
    e.stopPropagation();
    const query = {
      oldVolunteers: [...oldVolunteers, user],
      candidateVolunteers: candidateVolunteers.filter(
        (volunteer: any) => volunteer._id !== user._id
      ),
    };
    await mutateAsync({ userId: userId, query });
  };

  if (isLoading) return <Spinner />;

  return (
    <List users={candidateVolunteers}>
      {(user: any) => (
        <>
          <Button
            backgroundColor={'#792BA6'}
            handleOnClick={(e) => accept(e, user)}
          >
            <img src={vIcon} alt={'v icon'} />
            <span>למתנדבים שלי</span>
          </Button>
          <Button
            backgroundColor={'#B272CB'}
            handleOnClick={(e) => reject(e, user)}
          >
            <img src={closeIcon} alt={'close icon'} />
            <span>מתנדב לשעבר</span>
          </Button>
        </>
      )}
    </List>
  );
};

export default CandidatesVolunteers;
