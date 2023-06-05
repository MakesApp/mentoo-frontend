import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLoginMutation } from '../../api/services/api';
import AuthForm from '../../components/Auth/Auth';
import { useAuthContext } from '../../context/useAuth';
import { REGISTER_PAGE, VOLUNTEER_PAGE } from '../../routes/routePath';
import style from './Login.module.css';

const Login = () => {
  const { mutateAsync } = useLoginMutation();
  const { setUser } = useAuthContext();
  const [error,setError]=useState()
  const history = useHistory();
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await mutateAsync({ email, password });
      const { status, data } = response;

      if (status === 200) {
        setUser(data.user)
        const path = data.user.role === 'volunteer' ? VOLUNTEER_PAGE : '/';
        history.push(path);
        return;
      }
      

      // Handle successful login
    } catch (error) {
      // Handle login error
      setError(error.response.data.message)
    }
  };

  return (
    <div className={style.loginContainer}>
      <AuthForm onSubmit={handleLogin} buttonValue={'להתחבר'} error={error}>
        {/* <Link className={style.forgotPassword} to={''}>
          שכחתי סיסמה
        </Link> */}
      </AuthForm>
{/* 
      <div className={style.redirectContainer}>
        <span >אין לך חשבון ?</span>
        <Link className={style.redirectLink} to={REGISTER_PAGE}>פתיחת חשבון מנטו</Link>
      </div> */}
    </div>
  );
};

export default Login;
