import React from 'react';
import { days } from '../../constants';
import downArrow from '../../../../assets/images/downArrow.png';
import style from './PreferencesDaysBar.module.css';

const PreferencesDaysBar: React.FC = () => {
  const handleOnChange = (day: string): void => {
    console.log(day);
  };

  return (
    <div className={style.daysContainer}>
      <div className={style.dropdown}>
        <button className={style.dropdownBtn}>
          <img
            className={style.downArrowImg}
            src={downArrow}
            alt="down arrow"
          />
          <span> ימי התנדבות</span>
        </button>

        <ul className={style.ulContent}>
          {days.map(({ name }, index) => {
            return (
              <li key={name}>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${name}`}
                      name={name}
                      value={name}
                      onChange={() => handleOnChange(name)}
                    />
                    <label htmlFor={`custom-checkbox-${name}`}>{name}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PreferencesDaysBar;
