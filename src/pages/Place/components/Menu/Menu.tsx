import { Link } from 'react-router-dom';
import style from './Menu.module.css';

interface MenuProps {
  currentItem: string;
  list: string[];
  setCurrentItem: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({ currentItem, list, setCurrentItem }) => {

  return (
    <ul className={style.list}>
      {list.map((item) => (
        <li
          key={item}
          className={`${style.listItem} ${currentItem === item ? style.selected : ''}`}
        >
          <button className={style.btn} onClick={() => setCurrentItem(item)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
