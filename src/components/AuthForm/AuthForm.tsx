import React, { ReactNode } from 'react';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import volunteerImg from '../../assets/images/volunteer.svg';
import style from './AuthForm.module.css';
import Logo from '../Logo/Logo';

interface AuthFormProps {
  onSubmit: (email: string, password: string) => void;
  buttonValue?: string;
  children?: ReactNode | undefined;
  error?: string | undefined;
  isLogging?: boolean;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('איימיל לא תקין')
    .required('הכניסו איימיל')
    .matches(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      'פורמט לא תקין'
    ),
  password: Yup.string().min(6, 'לפחות 6 תווים').required('הכניסו סיסמה'),
});

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  buttonValue,
  children,
  error,
  isLogging,
}) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const alert = false;

  const handleSubmit = (
    values: { email: string; password: string },
    actions: FormikHelpers<{ email: string; password: string }>
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
              src={volunteerImg}
              alt={'סוג משתמש'}
            />
          </div>
          <div className={style.formContainer}>
            <h2 className={style.formTitle}>התחברות לחשבון המנטו שלך</h2>
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
            <span role="alert" className={style.alertMsg}>
              {error}
            </span>
            {children}
            <button
              className={`${style.submit}`}
              type="submit"
              disabled={!isValid || isLogging}
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
