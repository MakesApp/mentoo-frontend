import Button from '../Button/Button'
import List from '../List/List'
import vIcon from '../../../../assets/images/v-icon.svg'

interface User {
  id: string;
  profileImage: string;
  fullName: string;
}

interface ListProps {
  users: User[];
}

const OldVolunteers: React.FC<ListProps>  = ({users}) => {
  return (
    <List users={users}>  <Button backgroundColor={"#792BA6"}>
             <img src={vIcon} alt={"v icon"}/>
             <span>למתנדבים שלי</span>
         </Button></List>
  )
}

export default OldVolunteers