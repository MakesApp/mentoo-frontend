import React, { createContext, useEffect, useState } from 'react';
import {useQuery} from 'react-query';
import { getPlaceById, getUsers } from '../../../api/services/api';
import {useAuthContext} from '../../../context/useAuth'

const PlaceContext = createContext(undefined);

export const PlaceProvider: React.FC = ({ children }) => {
  const {user}=useAuthContext();
  const {placeId}=user;
  const [place,setPlace]=useState(null)
const [myVolunteers,setMyVolunteers]=useState(null)
const [candidateVolunteers,setCandidateVolunteers]=useState(null)
const [oldVolunteers,setOldVolunteers]=useState(null)

  const {data:placeData} = useQuery(['places', placeId], getPlaceById);

    const {data:myVolunteersData}=useQuery(['places', place?.myVolunteers],getUsers)
const {data:candidateVolunteersData}=useQuery(['places', place?.candidateVolunteers],getUsers)
const {data:oldVolunteersData}=useQuery(['places', place?.oldVolunteers],getUsers)
  

useEffect(()=>{
    
    if(placeData)
    setPlace(placeData.place)
  if(myVolunteersData)
  setMyVolunteers(myVolunteersData.users)
  if(candidateVolunteersData)
  setCandidateVolunteers(candidateVolunteersData.users)
  if(oldVolunteersData)
  setOldVolunteers(oldVolunteersData.users)
},[myVolunteersData,candidateVolunteersData,oldVolunteersData,placeData])
 

  const value = {
  myVolunteers,setMyVolunteers,candidateVolunteers,setCandidateVolunteers,place,oldVolunteers
  };
  

  return <PlaceContext.Provider value={value}>{children}</PlaceContext.Provider>;
};

export const usePlaceContext = () => {
  const placeContext = React.useContext(PlaceContext);
  if (!placeContext) {
    throw new Error('usePlaceContext must be used within PlaceProvider');
  }
  return placeContext;
};
