import  { useState } from 'react';
import { useLoginMutation } from '../../api/services/api';
import AuthForm from '../../components/AuthForm/AuthForm';
import Spinner from '../../components/Spinner/Spinner';
import { useAuthContext } from '../../context/useAuth';
import style from './Login.module.css';

const Login = () => {
  const { mutateAsync,isLoading:loginLoading } = useLoginMutation();
  const {isLoading:isUserLoading}=useAuthContext()
  const isLoading=loginLoading||isUserLoading;
  const [error, setError] = useState<string | undefined>();
  const handleLogin = async (email: string, password: string) => {
    try {
       await mutateAsync({ email, password });

      // Handle successful login
    } catch (error:any) {
      // Handle login error
      setError(error.response?.data?.message);
    }
  };

  if(isLoading)
  return <Spinner/>

  return (
    <div className={style.loginContainer}>
      <AuthForm onSubmit={handleLogin} buttonValue={'להתחבר'} error={error} />
    </div>
  );
};

export default Login;
