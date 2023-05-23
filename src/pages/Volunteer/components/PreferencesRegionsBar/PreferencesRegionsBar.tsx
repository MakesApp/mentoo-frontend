import React, { useEffect, useState } from 'react';
import downArrow from '../../../../assets/images/downArrow.png';
import CheckboxesTree from '../CheckboxesTree/CheckboxesTree';
import style from './PreferencesRegionsBar.module.css';

const PreferencesRegionsBar: React.FC = ({ regions, setRegions, expanded, setExpanded }) => {
  return (
    <div className={style.regionsContainer}>
      <div className={style.dropdown}>
        <button className={style.dropdownBtn}>
          <img className={style.downArrowImg} src={downArrow} alt="down arrow" />
          איזור
        </button>

        <ul className={style.ulContent}>
          <CheckboxesTree regions={regions} setRegions={setRegions} expanded={expanded} setExpanded={setExpanded} />
        </ul>
      </div>
    </div>
  );
};

export default PreferencesRegionsBar;
