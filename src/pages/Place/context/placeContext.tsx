import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getPlaceById, getUsers } from '../../../api/services/api';
import { useAuthContext } from '../../../context/useAuth';
import { IPlace } from '../../../types/IPlace';
import { IUser } from '../../../types/IUser';

interface PlaceProviderProps {
  children: ReactNode;
}

interface PlaceContextType {
  myVolunteers: IUser[];
  setMyVolunteers: React.Dispatch<React.SetStateAction<IUser[]>>;
  candidateVolunteers: IUser[];
  setCandidateVolunteers: React.Dispatch<React.SetStateAction<IUser[]>>;
  place: IPlace | null;
  oldVolunteers: IUser[];
}

const PlaceContext = createContext<PlaceContextType | undefined>(undefined);

export const PlaceProvider: React.FC<PlaceProviderProps> = ({ children }) => {
  const { user } = useAuthContext();
  const { placeId } = user;
  const [place, setPlace] = useState<IPlace | null>(null);
  const [myVolunteers, setMyVolunteers] = useState<IUser[]>([]);
  const [candidateVolunteers, setCandidateVolunteers] = useState<IUser[]>([]);
  const [oldVolunteers, setOldVolunteers] = useState<IUser[]>([]);

  const { data: placeData } = useQuery(['places', placeId], getPlaceById);
  const { data: myVolunteersData } = useQuery(['places', place?.myVolunteers,'chat'], getUsers, {
    enabled: !!place?.myVolunteers,
  });

  const { data: candidateVolunteersData } = useQuery(
    ['places', place?.candidateVolunteers,'chat'],
    getUsers,
    {
      enabled: !!place?.candidateVolunteers,
    }
  );

  const { data: oldVolunteersData } = useQuery(
    ['places', place?.oldVolunteers,'chat'],
    getUsers,
    {
      enabled: !!place?.oldVolunteers,
    }
  );

  useEffect(() => {
    if (placeData) setPlace(placeData.place);
    if (myVolunteersData) setMyVolunteers(myVolunteersData.users);
    if (candidateVolunteersData) setCandidateVolunteers(candidateVolunteersData.users);
    if (oldVolunteersData) setOldVolunteers(oldVolunteersData.users);
  }, [myVolunteersData, candidateVolunteersData, oldVolunteersData, placeData]);

  const value: PlaceContextType = {
    myVolunteers,
    setMyVolunteers,
    candidateVolunteers,
    setCandidateVolunteers,
    place,
    oldVolunteers,
  };

  return <PlaceContext.Provider value={value}>{children}</PlaceContext.Provider>;
};

export const usePlaceContext = (): PlaceContextType => {
  const placeContext = React.useContext(PlaceContext);
  if (!placeContext) {
    throw new Error('usePlaceContext must be used within PlaceProvider');
  }
  return placeContext;
};
