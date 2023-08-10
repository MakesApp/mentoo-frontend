import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../../api/services/api';
import AuthForm from '../../components/AuthForm/AuthForm';
import Spinner from '../../components/Spinner/Spinner';
import style from './Register.module.css';

const Register = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [error, setError] = useState<any>(); // Provide the correct type for the 'error' state
  const { mutateAsync, isLoading } = useRegisterMutation();

  const handleOnRegister = async (email: string, password: string) => {
    try {
      await mutateAsync({ email, password });

      // Handle successful registration
    } catch (error: any) {
      // Handle registration error
      setError(error.response?.data?.message); // Access the error message from the response
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className={style.container}>
      <AuthForm
        onSubmit={handleOnRegister}
        buttonValue={'הצטרפות למאגר'}
        error={error}
      >
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
