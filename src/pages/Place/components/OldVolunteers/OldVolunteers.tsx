import Button from '../Button/Button';
import List from '../List/List';
import vIcon from '../../../../assets/images/v-icon.svg';
import { useUpdateVolunteerListMutation } from '../../../../api/services/api';
import Spinner from '../../../../components/Spinner/Spinner';
import { useAuthContext } from '../../../../context/useAuth';

interface OldVolunteersProps {
  myVolunteers: any;
  oldVolunteers: any;
}
const OldVolunteers: React.FC<OldVolunteersProps> = ({
  oldVolunteers,
  myVolunteers,
}) => {
  const { mutateAsync, isLoading: isMutationLoading } =
    useUpdateVolunteerListMutation();
  const { user ,isLoading:isAuthLoading} = useAuthContext();
  const userId = user._id;
  const isLoading = isMutationLoading||isAuthLoading;
  const accept = async (e: React.MouseEvent, user) => {
    e.stopPropagation();
    const query = {
      myVolunteers: [...myVolunteers, user],
      oldVolunteers: oldVolunteers?.filter(
        (volunteer) => volunteer._id !== user._id
      ),
    };
    await mutateAsync({ userId: userId, query });
  };

  if (isLoading || isMutationLoading) return <Spinner />;

  return (
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
