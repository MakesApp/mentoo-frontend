import { useAuthContext } from '../../context/useAuth'
import style from  './DefaultUserAvatar.module.css'

const DefaultUserAvatar = ({children}) => {
    
  return (
    <div className={style.avatarContainer}>
       {children}
    </div>
  )
}

export default DefaultUserAvatar