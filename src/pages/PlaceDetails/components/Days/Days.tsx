import React from 'react';
import styles from './Days.module.css';
import { weekDays } from './constants';

interface DaysProps {
  days: string[];
}

const Days: React.FC<DaysProps> = ({ days }) => {
  const compareDays = () => {
    const jsxArr: JSX.Element[] = [];
    for (let i = 0; i < Object.keys(weekDays).length; i++) {
      if (days.includes(Object.keys(weekDays)[i])) {
        jsxArr.push(
          <li className={styles.availableDayItem}>
            {Object.values(weekDays)[i]}
          </li>
        );
      } else {
        jsxArr.push(
          <li className={styles.notAvailableDayItem}>
            {Object.values(weekDays)[i]}
          </li>
        );
      }
    }
    return jsxArr;
  };

  return (
    <>
      <ul className={styles.daysList}>
        {compareDays().map((day, index) => (
          <React.Fragment key={index}>{day}</React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default Days;
