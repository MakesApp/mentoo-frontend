import Header from '../Header/Header'
import style from './ChatList.module.css'
import arrowLeft from '../../assets/images/arrow-left.svg'
import { Link } from 'react-router-dom'
import Title from '../Title/Title'

const ChatList = () => {
  return (
    <div><Header>
            <Link to={{pathname:"/"}}>
            <img src={arrowLeft} alt="arrow left"/>
            </Link>
            </Header>
             <Title title={'מחוברים לחיים'} subTitle={'ההודעות שלי'}/>
            </div>
  )
}

export default ChatList