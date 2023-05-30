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
