import React, { ReactNode } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuthContext } from '../../context/useAuth';
import volunteerImg from '../../assets/images/volunteer.png';
import placeImg from '../../assets/images/place.png';
import './Auth.css';
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('צריך להכניס איימיל'),
  password: Yup.string().required('צריך להכניס סיסמה'),
});

interface AuthFormProps {
  onSubmit: (email: string, password: string) => void;
  buttonValue: string;
  children: ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  buttonValue,
  children,
}) => {
  const { userRole } = useAuthContext();
  const initialValues = {
    email: '',
    password: '',
  };

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
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="auth-container">
          <div>{/* Logo */}</div>
          <div>
            <img
              src={userRole === 'volunteer' ? volunteerImg : placeImg}
              alt={userRole}
            />
          </div>
          <h2 className="form-title">התחברות לחשבון המנטו שלך</h2>
          <div className="form-control">
            {/* Email Input */}
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="inputField"
            />
            <ErrorMessage
              className="invalid-msg"
              name="email"
              component="div"
            />
          </div>
          <div className="form-control">
            {/* Password Input */}
            <Field
              autoComplete="current-password"
              type="password"
              name="password"
              placeholder="Password"
              className="inputField"
            />
            <ErrorMessage
              className="invalid-msg"
              name="password"
              component="div"
            />
          </div>
          {children}
          <button type="submit">{buttonValue}</button>
        </div>
      </Form>
    </Formik>
  );
};

export default AuthForm;
