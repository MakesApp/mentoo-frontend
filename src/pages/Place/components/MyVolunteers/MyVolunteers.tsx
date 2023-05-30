import React from 'react'
import List from '../List/List'
import pauseIcon from '../../../../assets/images/pause-icon.svg'
import closeIcon from '../../../../assets/images/close-icon.svg'
import Button from '../Button/Button'
interface User {
  id: string;
  profileImage: string;
  fullName: string;
}

interface ListProps {
  users: User[];
}

const MyVolunteers: React.FC<ListProps>  = ({users}) => {
  return (
    <List users={users}>
         <Button backgroundColor={"#792BA6"}>
             <img src={pauseIcon} alt={"pause"}/>
             <span>למועמדים שלי</span>
         </Button>
    </List>
  )
}

export default MyVolunteers