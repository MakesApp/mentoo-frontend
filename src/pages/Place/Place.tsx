import { useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from './components/Menu/Menu';
import Title from '../../components/Title/Title';
import MyVolunteers from './components/MyVolunteers/MyVolunteers';
import CandidateVolunteers from './components/CandidatesVolunteers/CandidatesVolunteers';
import OldVolunteers from './components/OldVolunteers/OldVolunteers';
import { usePlaceContext } from './context/placeContext';

const listTitles = ['המתנדבים שלי', 'מועמדים', 'מנתדבים לשעבר'];

const Place = () => {
  const [currentList, setCurrentList] = useState('המתנדבים שלי');
  const { place } = usePlaceContext();
  const renderList = () => {
    switch (currentList) {
      case 'המתנדבים שלי':
        return <MyVolunteers />;
      case 'מועמדים':
        return <CandidateVolunteers />;
      case 'מנתדבים לשעבר':
        return <OldVolunteers />;
      default:
        return null;
    }
  };

 
  return (
    <div>
      <Header  />
      <Title title={'מחוברים לחיים'} subTitle={currentList} />
      <Menu
        list={listTitles}
        currentItem={currentList}
        setCurrentItem={setCurrentList}
      />
      {place && renderList()}
    </div>
  );
};

export default Place;
