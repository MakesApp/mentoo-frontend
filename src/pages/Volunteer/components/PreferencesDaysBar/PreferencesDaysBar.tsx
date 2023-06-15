import React from 'react';
import { days } from '../../constants';
import downArrow from '../../../../assets/images/downArrow.png';
import style from './PreferencesDaysBar.module.css';

interface PreferencesDaysBarProps {
  selectedDays: string[];
  setSelectedDays: React.Dispatch<React.SetStateAction<string[]>>;
}

const PreferencesDaysBar: React.FC<PreferencesDaysBarProps> = ({
  selectedDays,
  setSelectedDays,
}) => {
  const handleOnChange = (day: string): void => {
    const newSelectedDays = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];

    setSelectedDays(newSelectedDays);
  };

  return (
    <div className={style.daysContainer}>
      <div className={style.dropdown}>
        <button className={style.dropdownBtn}>
          <img className={style.downArrowImg} src={downArrow} alt="down arrow" />
          <span> ימי התנדבות</span>
        </button>

        <ul className={style.ulContent}>
          {days.map(({ name }) => {
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
