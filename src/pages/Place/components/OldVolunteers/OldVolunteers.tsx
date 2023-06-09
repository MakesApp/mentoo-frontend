import Button from '../Button/Button'
import List from '../List/List'
import vIcon from '../../../../assets/images/v-icon.svg'
import { usePlaceContext } from '../../context/placeContext'
import { useUpdateVolunteerListMutation } from '../../../../api/services/api'

interface User {
  id: string;
  profileImage: string;
  fullName: string;
}



const OldVolunteers: React.FC  = () => {
  const {oldVolunteers,myVolunteers,place}=usePlaceContext();
  const {mutateAsync}=useUpdateVolunteerListMutation()
  const {_id:placeId}=place;

  const accept=async (user)=>{

        const query={
          myVolunteers:[...myVolunteers,user._id],
          oldVolunteers:oldVolunteers.filter(volunteer=>volunteer._id!==user._id)
    }
    await mutateAsync({placeId: placeId,query});
  }
  return (
    <List users={oldVolunteers}> 
      {(user)=>
       <Button backgroundColor={"#792BA6"} handleOnClick={()=>accept(user)}>
             <img src={vIcon} alt={"v icon"}/>
             <span>למתנדבים שלי</span>
         </Button>
}
</List>
  )
}

export default OldVolunteers