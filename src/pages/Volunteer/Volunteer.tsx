import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

import PersonalData from './components/PersonalData/PersonalData';
import PlaceCard from './components/PlaceCard/PlaceCard';
import PreferencesDaysBar from './components/PreferencesDaysBar/PreferencesDaysBar';
import PreferencesRegionsBar from './components/PreferencesRegionsBar/PreferencesRegionsBar';
import style from './Volunteer.module.css';

interface Place {
  id: number;
  fullName: string;
  pic: string;
  details: string;
  days?: string[];
  city?: string;
  address?: string;
  icon?: string;
}

const Volunteer: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([
    {
      id: 1,
      fullName: 'מרכז שקר כלשהו',
      pic: 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/12/10/1321/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.jpg/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.16x9.jpg',
      details: 'לא עושים כאן כלום בדוק',
      days: ['ראשון', 'שלישי'],
      city: 'Netivot',
      address: 'אזור השפלה',
      icon: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
      id: 2,
      fullName: 'מרכז שקר אחר',
      pic: 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/12/10/1321/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.jpg/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.16x9.jpg',
      details: 'עושים כאן כלום בדוק',
      days: ['ראשון', 'שני'],
      city: 'Netivot',
      address: 'אזור חיפה',
    },
  ]);
  const [expanded, setExpanded] = useState<string[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
console.log(regions);

  useEffect(() => {
    let newFilteredPlaces = [...places];
    if (regions.length > 0) {
      newFilteredPlaces = newFilteredPlaces.filter((place) => regions.includes(place.address));
    }

    if (selectedDays.length > 0) {
      newFilteredPlaces = newFilteredPlaces.filter((place) =>
        selectedDays.every((day) => place.days?.includes(day))
      );
    }
    setFilteredPlaces(newFilteredPlaces);
  }, [regions, selectedDays, places]);

  return (
    <div>
      <Header avatarUrl=""/>
      <PersonalData />
      <div className={style.content}>
        <div className={style.daysRegionContainer}>
          <PreferencesRegionsBar
            checkedNodes={regions}
            setCheckedNodes={setRegions}
            expandedNodes={expanded}
            setExpandedNodes={setExpanded}
          />
          <PreferencesDaysBar selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
        </div>
        <span className={style.result}>{`${filteredPlaces.length} תוצאות`}</span>
        <ul className={style.cardList}>
          {filteredPlaces.map((place) => {
            return (
              <li className={style.card} key={place.id}>
                <PlaceCard
                  placeId={place.id}
                  placePic={place.pic}
                  placeFullName={place.fullName}
                  placeDetails={place.details}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Volunteer;
