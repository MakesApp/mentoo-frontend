import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../api/services/api';
import AuthForm from '../../components/Auth/Auth';
import { useAuthContext } from '../../context/useAuth';
import './Login.css';
const Login = () => {
  const { mutateAsync } = useLoginMutation();
  const { setIsAuthenticated } = useAuthContext();

  console.log('assa');
  
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await mutateAsync({ email, password });
      const { status, data } = response;

      if (status === 200) {
        setIsAuthenticated(true);
        localStorage.setItem('token', data.token);
      }

      // Handle successful login
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  return (
    <div className="login-container">
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
