import React from 'react'
import List from '../List/List'
import pauseIcon from '../../../../assets/images/pause-icon.svg'
import closeIcon from '../../../../assets/images/close-icon.svg'
import Button from '../Button/Button'
import { useUpdateVolunteerListMutation } from '../../../../api/services/api'
import { useAuthContext } from '../../../../context/useAuth'
interface User {
  id: string;
  profileImage: string;
  fullName: string;
}

interface ListProps {
  users: User[];
}

const MyVolunteers: React.FC<ListProps>  = ({users}) => {
const {mutateAsync}=useUpdateVolunteerListMutation()
const {user}=useAuthContext()
const {placeId:place}=user;

  const handleOnClick=async (user)=>{
    
console.log(user);
    const query={
          candidateVolunteers:[...place.candidateVolunteers,user._id],
          myVolunteers:place.myVolunteers.filter(volunteer=>volunteer!==user._id)
    }
   const response= await mutateAsync({placeId: place._id,query});
   console.log(response);
   
  };
  return (
    <List users={users}>
      {(user)=>{
        
    return  <Button backgroundColor={"#792BA6"} handleOnClick={()=>handleOnClick(user)}>
             <img src={pauseIcon} alt={"pause"}/>
             <span>למועמדים שלי</span>
         </Button>
      }

         }
    </List>
  )
}

export default MyVolunteers