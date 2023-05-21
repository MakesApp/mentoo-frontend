import './Home.css';
import place from '../../assets/images/place.png';
import volunteer from '../../assets/images/volunteer.png';
import { useAuthContext } from '../../context/useAuth';
import { useNavigate } from "react-router-dom";
import { LOGIN_PAGE } from '../../routes/routePath';

const Home = () => {
  const { setUserRole} = useAuthContext();
  const navigate = useNavigate();
  const handleRoleSelection = (role: string) => {
    setUserRole(role);
    navigate(LOGIN_PAGE)
  };
  return (
    <div className="container">
      {/* logo */}
      <div>
        logdssdhsd<span>sag</span>o
      </div>
      <div className="selection-container">
        <button className="button" onClick={() => handleRoleSelection('place')}>
          <img src={place} alt="place" />
          <span>מקום התנדבות</span>
        </button>
        <button
          className="button"
          onClick={() => handleRoleSelection('volunteer')}
        >
          <img src={volunteer} alt="volunteer" />
          <span>מתנדב</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
