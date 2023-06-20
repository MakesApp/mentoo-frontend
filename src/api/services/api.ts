import { useMutation, UseMutationResult } from 'react-query';
import api from '../../config/api';
import queryClient from '../../config/reactQuery';
export const useLoginMutation = () => {
  return useMutation((payload: any) =>
    api.post('/user/login', payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('auth');
      },
    }
  );
};

export const useRegisterMutation = () => {
  return useMutation((payload: any) =>
    api.post('/user/register', payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('auth');
      },
    }
  );
};

export const useLogoutMutation = () => {
  return useMutation(() => api.get('/user/logout'), {
    onSuccess: () => {
        queryClient.setQueryData('auth', undefined);
        queryClient.clear();

    },
  });
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


export const useUpdateVolunteerListMutation = (): UseMutationResult<
  any,
  unknown,
  { placeId: string|null, query: any },
  unknown
> => {
  return useMutation(
    ({ placeId, query }) => api.patch(`/place/${placeId}`, {query}),
     {
      onSuccess: () => {
        queryClient.invalidateQueries('place')
      },
    }
   
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
export const getUserById = async ({queryKey}) => {
    const [_, userId] = queryKey;

  const response = await api.get(`/user/${userId}`);

  return response.data;
};

export const authUser = async () => {

  const response = await api.get(`/user/auth`);

  return response.data;
};