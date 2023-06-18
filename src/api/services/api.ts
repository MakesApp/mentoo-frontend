import { useMutation, UseMutationResult } from 'react-query';
import api from '../../config/api';

export const useLoginMutation = () => {
  const loginMutation = useMutation((payload:any) =>
    api.post('/user/login', payload)
  );

  return loginMutation;
};

export const useRegisterMutation = () => {
  const registerMutation = useMutation((payload:any) =>
    api.post('/user/register', payload)
  );

  return registerMutation;
};

export const getAllPlaces = async () => {
  const response = await api.get('/place/getPlaces');

  return response.data;
};

export const getPlaceById = async ({ queryKey }: { queryKey: string[] }) => {
  const [_, placeId] = queryKey;
  const response = await api.get(`/place/${placeId}`);
  return response.data;
};

export const useLogoutMutation = () => {
  const logoutMutation = useMutation(() => api.get('/user/logout'));

  return logoutMutation;
};

export const useUpdateVolunteerListMutation = (): UseMutationResult<
  any,
  unknown,
  { placeId: string|null, query: any },
  unknown
> => {
  return useMutation(
    ({ placeId, query }) => api.patch(`/place/${placeId}`, {query}),
   
  );
};

export const getUsers = async ({ queryKey }) => {
  const [_, users] = queryKey;
  const response = await api.post('/users/getUsers', { list: users });

  return response.data;
};

export const getChatPartners = async () => {
  const response = await api.get('/conversation/getChatPartners');

  return response.data;
};

export const getUserUnreadMessages = async () => {
  const response = await api.get('/user/has-unread-messages');

  return response.data;
};
