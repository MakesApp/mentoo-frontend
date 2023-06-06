import { useMutation,useQuery } from 'react-query';
import api from '../../config/api';


export const useLoginMutation = () => {
  const loginMutation = useMutation(
    (payload) => api.post('/user/login', payload)
  );

  return loginMutation;
};


export const useRegisterMutation = () => {
  const registerMutation = useMutation(
    (payload) => api.post('/user/register', payload)
  );

  return registerMutation;
};

export const getAllPlaces = async () => {
  const response = await api.get('/place/getPlaces');
  
  return response.data;
}
export const getPlaceById = async ({ queryKey }) => {
  const [_, placeId] = queryKey;
  const response = await api.get(`/place/${placeId}`);
  return response.data;
};

export const useLogoutMutation = () => {
  const logoutMutation = useMutation(
    () => api.get('/user/logout')
  );

  return logoutMutation;
};

export const useUpdateVolunteerListMutation = (): UseMutationResult<any, unknown, UpdateVolunteerPayload, unknown> => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ placeId, query }) => api.patch(`/place/${placeId}`, { query }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('place');
      }
    }
  );
};