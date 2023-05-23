import React from 'react';
import style from './Home.module.css';
import place from '../../assets/images/place.svg';
import volunteer from '../../assets/images/volunteer.svg';
import { useAuthContext } from '../../context/useAuth';
import { useHistory } from 'react-router-dom';
import { LOGIN_PAGE } from '../../routes/routePath';
import Logo from '../../components/Logo/Logo';

const Home = () => {
  const { setUserRole } = useAuthContext();
  const history = useHistory();

  const handleRoleSelection = (role: string) => {
    setUserRole(role);
    localStorage.setItem('role', role);
    history.push(LOGIN_PAGE);
  };

  return (
    <div className={style.homeContainer}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div></div>
      <div className={style.selectionContainer}>
        <button
          className={style.button}
          onClick={() => handleRoleSelection('place')}
        >
          <img className={style.img} src={place} alt="place" />
          <span className={style.text}>מקום התנדבות</span>
        </button>
        <button
          className={style.button}
          onClick={() => handleRoleSelection('volunteer')}
        >
          <img className={style.img} src={volunteer} alt="volunteer" />
          <span className={style.text}>מתנדב</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
