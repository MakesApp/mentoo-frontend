import React, { ReactNode } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuthContext } from '../../context/useAuth';
import volunteerImg from '../../assets/images/volunteer.svg';
import style from './Auth.module.css';
import Logo from '../Logo/Logo';

const validationSchema = Yup.object({
  email: Yup.string().email('איימיל לא תקין').required('הכניסו איימיל') 
  .matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      'פורמט לא תקין'
    ),
  password: Yup.string().min(6, 'לפחות 6 תווים').required('הכניסו סיסמה'),
});

interface AuthFormProps {
  onSubmit: (email: string, password: string) => void;
  buttonValue: string;
  children: ReactNode;
  error:string
}

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  buttonValue,
  children,
  error
}) => {

  const initialValues = {
    email: '',
    password: '',
  };

  const alert = false;

  const handleSubmit = (
    values: any,
    actions: any,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    onSubmit(values.email, values.password);
    actions.setSubmitting(false); // Manually set submitting state to false
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      isInitialValid={false}
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form className={style.authContainer}>
          <div className={style.logo}>
            <Logo />
          </div>
          <div>
            <img
              className={style.roleImg}
              src={ volunteerImg}
              alt={'סוג משתמש'}
            />
          </div>
          <div className={style.formContainer}>
            <h2 className={style.formTitle}>
              התחברות לחשבון המנטו שלך
            </h2>
            <div className={style.formControl}>
              {/* Email Input */}
              <Field
                type="email"
                name="email"
                placeholder="כתובת דוא״ל"
                className={`${style.inputField} ${alert && style.inputAlert}`}
              />
              <ErrorMessage
                className={style.invalidMsg}
                name="email"
                component="div"
              />
            </div>
            <div className={style.formControl}>
              {/* Password Input */}
              <Field
                autoComplete="current-password"
                type="password"
                name="password"
                placeholder="סיסמא"
                className={`${style.inputField} ${alert && style.inputAlert}`}
              />
              <ErrorMessage
                className={style.invalidMsg}
                name="password"
                component="div"
              />
            </div>
            <span role="alert" className={style.alertMsg}>{error}</span>
            {children}
            <button
              className={`${style.submit}`}
              type="submit"
              disabled={!isValid}
            >
              {buttonValue}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
