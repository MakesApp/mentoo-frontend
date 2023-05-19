import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/Auth/Auth';
import './Register.css';
const Register = () => {
  const [isChecked,setIsChecked]=useState(true)
  const handleOnRegister = () => {};
  return (
    <div className="container">
      <AuthForm onSubmit={handleOnRegister} buttonValue={'הצטרפות למאגר'}>
        <div className="mail-confirmation">
          <input
            type="checkbox"
            name="checkbox"
            checked={isChecked}
            onChange={()=>setIsChecked(!isChecked)}
            className="checkbox"
          />
          <label htmlFor="checkbox" className="label">
            מאשר קבלת מיילים מהאפליקציה
          </label>
        </div>
        <Link to="jesus" className="link">
          למה אנחנו מבקשים את זה?
        </Link>
      </AuthForm>
    </div>
  );
};

export default Register;
