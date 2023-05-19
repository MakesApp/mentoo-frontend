import { Link } from 'react-router-dom';
import AuthForm from '../../components/Auth/Auth';
import './Login.css';

const Login = () => {
  const handleLogin = (email: string, password: string) => {
    // Login logic here
    //we need to compare the credentials with user in our mongodb database
    console.log(email, password);
  };
  return (
    <div className="container">
      <AuthForm onSubmit={handleLogin} buttonValue={'להתחבר'} />
      <Link className="forgot-password" to={''}>
        שכחתי סיסמה
      </Link>
      <div className="redirect-container">
        <span>?אין לך חשבון</span>
        <Link to={''}>פתיחת חשבון מנטו</Link>
      </div>
    </div>
  );
};

export default Login;
