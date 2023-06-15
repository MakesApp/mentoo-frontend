import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getPlaceById, getUsers } from '../../../api/services/api';
import { useAuthContext } from '../../../context/useAuth';
import { IUser } from '../../../types/IUser';

interface PlaceContextProps {
  myVolunteers: IUser[] | null;
  setMyVolunteers: React.Dispatch<React.SetStateAction<IUser[] | null>>;
  candidateVolunteers: IUser[] | null;
  setCandidateVolunteers: React.Dispatch<React.SetStateAction<IUser[] | null>>;
  place: any;
  oldVolunteers: IUser[] | null;
}

const PlaceContext = createContext<PlaceContextProps | undefined>(undefined);

export const PlaceProvider: React.FC = ({ children }) => {
  const { user } = useAuthContext();
  const { placeId } = user;
  const [place, setPlace] = useState<any>(null);
  const [myVolunteers, setMyVolunteers] = useState<IUser[] | null>(null);
  const [candidateVolunteers, setCandidateVolunteers] = useState<IUser[] | null>(
    null
  );
  const [oldVolunteers, setOldVolunteers] = useState<IUser[] | null>(null);

  const { data: placeData } = useQuery(['places', placeId], getPlaceById);
  const { data: myVolunteersData } = useQuery(['places', place?.myVolunteers], getUsers, {
    enabled: !!place?.myVolunteers,
  });

  const { data: candidateVolunteersData } = useQuery(
    ['places', place?.candidateVolunteers],
    getUsers,
    {
      enabled: !!place?.candidateVolunteers,
    }
  );

  const { data: oldVolunteersData } = useQuery(
    ['places', place?.oldVolunteers],
    getUsers,
    {
      enabled: !!place?.oldVolunteers,
    }
  );

  useEffect(() => {
    if (placeData) setPlace(placeData.place);
    if (myVolunteersData) setMyVolunteers(myVolunteersData.users);
    if (candidateVolunteersData)
      setCandidateVolunteers(candidateVolunteersData.users);
    if (oldVolunteersData) setOldVolunteers(oldVolunteersData.users);
  }, [myVolunteersData, candidateVolunteersData, oldVolunteersData, placeData]);

  const value: PlaceContextProps = {
    myVolunteers,
    setMyVolunteers,
    candidateVolunteers,
    setCandidateVolunteers,
    place,
    oldVolunteers,
  };

  return (
    <PlaceContext.Provider value={value}>{children}</PlaceContext.Provider>
  );
};

export const usePlaceContext = () => {
  const placeContext = React.useContext(PlaceContext);
  if (!placeContext) {
    throw new Error('usePlaceContext must be used within PlaceProvider');
  }
  return placeContext;
};
