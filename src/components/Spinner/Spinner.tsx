import style from './Spinner.module.css';
import mentooLogo from '../../assets/images/mentoo.svg';
const Spinner = () => {
  return <img className={style.spinner} src={mentooLogo} alt="logo" />;
};

export default Spinner;
