import React from 'react';
import style from './PersonalData.module.css';

interface User {
  id: number;
  fullName: string;
  volunteeringTime: number;
  project: string;
}

const PersonalData: React.FC = () => {
  const currentUser: User = {
    id: 1,
    fullName: 'Lord Voldemort',
    volunteeringTime: 118,
    project: 'TEALS',
  };

  return (
    <div>
      <div className={style.dataContainer}>
        <div className={style.personalInfo}>
          <p className={style.volHours}>{currentUser.volunteeringTime}</p>
          <p className={style.personalDataText}>
            <span> שעות </span>
            <span> ההתנדבות </span>
            <span> שלי</span>
          </p>
        </div>
        <div>
          <p className={style.project}>{currentUser.project}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
