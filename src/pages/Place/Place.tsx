
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from './components/Menu/Menu';
import Title from './components/Title/Title';
import UserList from './components/List/List'
import MyVolunteers from './components/MyVolunteers/MyVolunteers';
import PotentialVolunteers from './components/CandidatesVolunteers/CandidatesVolunteers';
import OldVolunteers from './components/OldVolunteers/OldVolunteers';

const userListData = [
  {
    id: '1',
    profileImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmR2oOek3bXoKycQL4U01te4yd4g4sqtPM3ih-two3-dJwYbsrjq4030WTGEKVTgdLwY&usqp=CAU',
    fullName: 'John Doe',
  },
  {
    id: '2',
    profileImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmR2oOek3bXoKycQL4U01te4yd4g4sqtPM3ih-two3-dJwYbsrjq4030WTGEKVTgdLwY&usqp=CAU',
    fullName: 'Jane Smith',
  },
  // Add more users as needed
];
const listTitles=['המתנדבים שלי','מועמדים','מנתדבים לשעבר']

const Place = () => {
    const [currentList,setCurrentList]=useState('המתנדבים שלי')
    const renderList=()=>{
        switch(currentList){
            case 'המתנדבים שלי':return <MyVolunteers users={userListData}/>
            case 'מועמדים':return <PotentialVolunteers users={userListData}/>
            case 'מנתדבים לשעבר':return <OldVolunteers users={userListData}/>
                default:return null;
        }
    }
  return (
    <div> 
        <Header/>
        <Title title={'מחוברים לחיים'} subTitle={currentList}/>
        <Menu list={listTitles} currentItem={currentList} setCurrentItem={setCurrentList}/>
         {renderList()   }
        </div>
  )
}

export default Place