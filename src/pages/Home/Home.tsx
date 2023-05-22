import './Home.css';
import place from '../../assets/images/place.png';
import volunteer from '../../assets/images/volunteer.png';
import { useAuthContext } from '../../context/useAuth';
import { useHistory } from "react-router-dom";
import { LOGIN_PAGE } from '../../routes/routePath';

const Home = () => {
  const { setUserRole} = useAuthContext();
  const history = useHistory();
  const handleRoleSelection = (role: string) => {
      console.log(role);
      
    setUserRole(role);
    history.push(LOGIN_PAGE)
  };
  return (
    <div className="home-container">
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
