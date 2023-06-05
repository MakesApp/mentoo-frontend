import { useAuthContext } from '../../context/useAuth'
import style from  './DefaultUserAvatar.module.css'

const DefaultUserAvatar = () => {
    const {user}=useAuthContext();
    
  return (
    <div className={style.avatarContainer}>
        {user&&Array.from(user.fullName)[0].toUpperCase()}
    </div>
  )
}

export default DefaultUserAvatar