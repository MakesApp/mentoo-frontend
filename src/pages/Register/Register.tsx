import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useRegisterMutation } from '../../api/services/api';
import AuthForm from '../../components/Auth/Auth';
import { useAuthContext } from '../../context/useAuth';
import { VOLUNTEER_PAGE } from '../../routes/routePath';
import style from './Register.module.css';

const Register = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [error,setError]=useState()
  const {setIsAuthenticated,userRole}=useAuthContext()
  const { mutateAsync } = useRegisterMutation();
  const history=useHistory();

  const handleOnRegister = async(email:string, password:string) => {
 try {
      const response = await mutateAsync({ email, password });
      const { status, data } = response;

      if (status === 200) {
        setIsAuthenticated(true);
        localStorage.setItem('token', data.token);
        const path = userRole === 'volunteer' ? VOLUNTEER_PAGE : '/';
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
    <div className={style.container}>
      <AuthForm onSubmit={handleOnRegister} buttonValue={'הצטרפות למאגר'} error={error}>
        <div className={style.mailConfirmation}>
          <input
            type="checkbox"
            name="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className={style.checkbox}
          />
          <label htmlFor="checkbox" className={style.label}>
            מאשר קבלת מיילים
          </label>
        </div>
        <Link to="jesus" className={style.link}>
          למה אנחנו מבקשים את זה?
        </Link>
      </AuthForm>
    </div>
  );
};

export default Register;
