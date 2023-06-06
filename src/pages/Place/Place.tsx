
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from './components/Menu/Menu';
import Title from './components/Title/Title';
import UserList from './components/List/List'
import MyVolunteers from './components/MyVolunteers/MyVolunteers';
import CandidateVolunteers from './components/CandidatesVolunteers/CandidatesVolunteers';
import OldVolunteers from './components/OldVolunteers/OldVolunteers';
import { useAuthContext } from '../../context/useAuth';
import {useQuery} from 'react-query';
import { getPlaceById } from '../../api/services/api';
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
  const {user}=useAuthContext();
  const {placeId:place}=user;
  
  const [currentList,setCurrentList]=useState('המתנדבים שלי')

 
    const renderList=()=>{
        switch(currentList){
            case 'המתנדבים שלי':return <MyVolunteers users={place.myVolunteers}/>
            case 'מועמדים':return <CandidateVolunteers users={place.candidateVolunteers}/>
            case 'מנתדבים לשעבר':return <OldVolunteers users={place.oldVolunteers}/>
                default:return null;
        }
    }
  return (
    <div> 
        <Header/>
        <Title title={'מחוברים לחיים'} subTitle={currentList}/>
        <Menu list={listTitles} currentItem={currentList} setCurrentItem={setCurrentList}/>
         {place&&renderList()   }
        </div>
  )
}

export default Place