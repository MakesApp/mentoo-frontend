import { useMutation } from 'react-query';
import api from '../../config/api';
type User = {
  _id: string;
  email: string;
  __v: number;
};

type LoginResponse = User & { message: string };

type LoginPayload = {
  email: string;
  password: string;
  token: string;
};

export const useLoginMutation = () => {
  const loginMutation = useMutation<LoginResponse, Error, LoginPayload>(
    (payload) => api.post('/user/login', payload)
  );

  return loginMutation;
};
