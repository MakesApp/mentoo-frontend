import React, { useState } from 'react';
import { days } from '../../constants';
import downArrow from '../../../../assets/images/downArrow.png';
import style from './PreferencesDaysBar.module.css';

const PreferencesDaysBar: React.FC = ({ selectedDays, setSelectedDays }) => {
  const handleOnChange = (day: string): void => {
    if (selectedDays.includes(day)) {
      const filteredDays = selectedDays.filter(
        (selectedDay) => selectedDay !== day
      );
      setSelectedDays(filteredDays);
      return;
    }

    setSelectedDays([...selectedDays, day]);
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
                      checked={selectedDays.includes(name)}
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
