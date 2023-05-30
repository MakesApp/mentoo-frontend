import { useAuthContext } from '../../context/useAuth'
import style from  './DefaultUserAvatar.module.css'

const DefaultUserAvatar = () => {
    const {user}=useAuthContext();
    console.log(user);
    
  return (
    <div className={style.avatarContainer}>
        {user&&Array.from(user?.fullName)[0]}
    </div>
  )
}

export default DefaultUserAvatar