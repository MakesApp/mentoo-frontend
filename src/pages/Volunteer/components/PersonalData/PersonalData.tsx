import React from 'react';
import style from './PersonalData.module.css';

const PersonalData: React.FC = () => {


  return (
    <div className={style.container}>
      <div className={style.dataContainer}>
        <div className={style.personalInfo}>
          <p className={style.volHours}>{'?'}</p>
          <p className={style.personalDataText}>
            <span> שעות </span>
            <span> ההתנדבות </span>
            <span> שלי</span>
          </p>
        </div>
        <div>
          <p className={style.project}>{'TEALS'}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
