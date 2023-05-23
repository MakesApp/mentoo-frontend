import { useMutation } from 'react-query';
import api from '../../config/api';
type User = {
  _id: string;
  email: string;
  __v: number;
};

type LoginResponse = User & { message: string };



export const useLoginMutation = () => {
  const loginMutation = useMutation<LoginResponse, Error>(
    (payload) => api.post('/user/login', payload)
  );

  return loginMutation;
};

export const useRegisterMutation = () => {
  const registerMutation = useMutation<LoginResponse, Error>(
    (payload) => api.post('/user/register', payload)
  );

  return registerMutation;
};