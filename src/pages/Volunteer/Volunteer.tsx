import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { IPlace } from '../../types/IPlace';

import PersonalData from './components/PersonalData/PersonalData';
import PlaceCard from './components/PlaceCard/PlaceCard';
import PreferencesDaysBar from './components/PreferencesDaysBar/PreferencesDaysBar';
import PreferencesRegionsBar from './components/PreferencesRegionsBar/PreferencesRegionsBar';
import style from './Volunteer.module.css';
import { useQuery } from 'react-query';
import { getAllPlaces } from '../../api/services/api';

const Volunteer: React.FC = () => {
  const { data } = useQuery('places', getAllPlaces);

  const [expanded, setExpanded] = useState<string[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<IPlace[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]); // Changed the type to 'number[]' to match the data type
  const [places, setPlaces] = useState<IPlace[]>([]);
console.log(regions,selectedDays);

  useEffect(() => {
    if (data) setPlaces(data.places);
  }, [data]);

  useEffect(() => {
    let newFilteredPlaces = [...places];
    if (regions.length > 0) {
      newFilteredPlaces = newFilteredPlaces.filter((place) =>
        regions.includes(place.address)
      );
    }

    if (selectedDays.length > 0) {
      newFilteredPlaces = newFilteredPlaces.filter((place) =>
        selectedDays.some((day) => place.availableDays?.includes(day))
      );
    }
    setFilteredPlaces(newFilteredPlaces);
  }, [regions, selectedDays, places]);

  const moveToLast = useCallback(
    (placeId: string) => {
      setPlaces((prevPlaces) => {
        const place = prevPlaces.find((place) => place._id === placeId);
        const filteredPlaces = prevPlaces.filter(
          (place) => place._id !== placeId
        );
        return [...filteredPlaces, place!]; // Added '!' to assert that 'place' is not undefined
      });
    },
    [setPlaces]
  );

  return (
    <div>
      <Header  />
      <PersonalData />
      <div className={style.content}>
        <div className={style.daysRegionContainer}>
          <PreferencesRegionsBar
            checkedNodes={regions}
            setCheckedNodes={setRegions}
            expandedNodes={expanded}
            setExpandedNodes={setExpanded}
          />
          <PreferencesDaysBar
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays} // Added type assertion to match the correct type
          />
        </div>
        <span className={style.result}>{`${filteredPlaces.length} תוצאות`}</span>
        <ul className={style.cardList}>
          {filteredPlaces.map((place) => {
            return (
              <li className={style.card} key={place._id}>
                <PlaceCard place={place} moveToLast={moveToLast} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Volunteer;
