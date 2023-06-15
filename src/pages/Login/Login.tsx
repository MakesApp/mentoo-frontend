import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLoginMutation } from '../../api/services/api';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useAuthContext } from '../../context/useAuth';
import { VOLUNTEER_PAGE } from '../../routes/routePath';
import style from './Login.module.css';

const Login = () => {
  const { mutateAsync } = useLoginMutation();
  const { setUser } = useAuthContext();
  const [error, setError] = useState<string | undefined>();
  const history = useHistory();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await mutateAsync({ email, password });
      const { status, data } = response;

      if (status === 200) {
        setUser(data.user);
        const path = data.user.role === 'volunteer' ? VOLUNTEER_PAGE : '/';
        history.push(path);
      }

      // Handle successful login
    } catch (error) {
      // Handle login error
      setError(error.response?.data?.message);
    }
  };

  return (
    <div className={style.loginContainer}>
      <AuthForm onSubmit={handleLogin} buttonValue={'להתחבר'} error={error} />
    </div>
  );
};

export default Login;
