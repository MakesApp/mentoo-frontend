import { useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from './components/Menu/Menu';
import Title from '../../components/Title/Title';
import MyVolunteers from './components/MyVolunteers/MyVolunteers';
import CandidateVolunteers from './components/CandidatesVolunteers/CandidatesVolunteers';
import OldVolunteers from './components/OldVolunteers/OldVolunteers';
import { useAuthContext } from '../../context/useAuth';

const listTitles = ['המתנדבים שלי', 'מועמדים', 'מנתדבים לשעבר'];

const Place = () => {
  const [currentList, setCurrentList] = useState('המתנדבים שלי');
  const { user } = useAuthContext();
  const {
    myVolunteers = [],
    candidateVolunteers = [],
    oldVolunteers = [],
  } = user;


  const renderList = () => {
    switch (currentList) {
      case 'המתנדבים שלי':
        return (
          <MyVolunteers
            candidateVolunteers={candidateVolunteers}
            myVolunteers={myVolunteers}
          />
        );
      case 'מועמדים':
        return (
          <CandidateVolunteers
            oldVolunteers={oldVolunteers}
            myVolunteers={myVolunteers}
            candidateVolunteers={candidateVolunteers}
          />
        );
      case 'מנתדבים לשעבר':
        return (
          <OldVolunteers
            oldVolunteers={oldVolunteers}
            myVolunteers={myVolunteers}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <Title title={'מחוברים לחיים'} subTitle={currentList} />
      <Menu
        list={listTitles}
        currentItem={currentList}
        setCurrentItem={setCurrentList}
      />
      {user && renderList()}
    </div>
  );
};

export default Place;
