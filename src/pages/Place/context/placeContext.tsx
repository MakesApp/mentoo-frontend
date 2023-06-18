import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getPlaceById } from '../../../api/services/api';
import { useAuthContext } from '../../../context/useAuth';
import { IPlace } from '../../../types/IPlace';

interface PlaceProviderProps {
  children: ReactNode;
}

interface PlaceContextType {
  setPlace: any;
  place: any;
  isLoading:boolean;
}

const PlaceContext = createContext<PlaceContextType | undefined>(undefined);

export const PlaceProvider: React.FC<PlaceProviderProps> = ({ children }) => {
  const { user } = useAuthContext();
  const { placeId } = user;
  const [place, setPlace] = useState<IPlace | null>(null);

  const { data: placeData,isLoading } = useQuery(['place', placeId], getPlaceById,{enabled:!!placeId});

 


  useEffect(() => {
    if (placeData){ 
      setPlace(placeData.place);
      }
  }, [placeData]);
 
  const value = {
    isLoading,
    setPlace,
    place,
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
