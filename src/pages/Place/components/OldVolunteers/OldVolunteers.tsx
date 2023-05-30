import List from '../List/List'
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
    <List users={users}>OldVolunteers</List>
  )
}

export default OldVolunteers