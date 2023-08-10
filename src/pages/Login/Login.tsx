import { useState } from 'react';
import { useLoginMutation } from '../../api/services/api';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useAuthContext } from '../../context/useAuth';
import style from './Login.module.css';

const Login = () => {
  const { setIsAuthenticated } = useAuthContext();
  const { mutateAsync } = useLoginMutation();
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLogging(true);
      const response = await mutateAsync({ email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      // Handle successful login
    } catch (error: any) {
      // Handle login error
      setError(error.response?.data?.message);
    } finally {
      setIsLogging(false);
    }
  };

  return (
    <div className={style.loginContainer}>
      <AuthForm
        isLogging={isLogging}
        onSubmit={handleLogin}
        buttonValue={'להתחבר'}
        error={error}
      />
    </div>
  );
};

export default Login;
