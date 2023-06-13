import style from './ChatWithNotification.module.css';
import chatIcon from '../../assets/images/chat-icon.svg';  // replace with your own chat icon path'
import { useAuthContext } from '../../context/useAuth';
import { Link } from 'react-router-dom';
import { CHAT_LIST_PAGE } from '../../routes/routePath';


const ChatWithNotification = ({handleOnClick}) => {
    const {hasUnreadMessages}=useAuthContext();
  return (
    <Link to={{pathname:CHAT_LIST_PAGE}} className={style.link}>
      <img src={chatIcon} alt="chat icon" className={style.chatIcon} />
      {hasUnreadMessages && <span className={style.notificationDot}></span>}
    </Link>
  )
}

export default ChatWithNotification;
