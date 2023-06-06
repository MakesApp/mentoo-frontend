import Button from "../Button/Button"
import List from "../List/List"
import vIcon from '../../../../assets/images/v-icon.svg'
import closeIcon from '../../../../assets/images/close-icon.svg'
interface User {
  id: string;
  profileImage: string;
  fullName: string;
}

interface ListProps {
  users: User[];
}

const CandidatesVolunteers: React.FC<ListProps>  = ({users}) => {
  return (
    <List users={users}> 
    {user=>
  <>  <Button backgroundColor={"#792BA6"}>
             <img src={vIcon} alt={"v icon"}/>
             <span>זה מנטו</span>
         </Button>
         <Button backgroundColor={"#B272CB"}>
             <img src={closeIcon} alt={"close icon"}/>
             <span>פעם אחרת</span>
         </Button>
         </>
         }
         </List>
  )
}

export default CandidatesVolunteers