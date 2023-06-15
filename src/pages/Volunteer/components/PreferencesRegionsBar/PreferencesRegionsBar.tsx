import React from 'react';
import downArrow from '../../../../assets/images/downArrow.png';
import CheckboxTree from '../CheckboxeTree/CheckboxTree';
import style from './PreferencesRegionsBar.module.css';

interface PreferencesRegionsBarProps {
  checkedNodes: number[];
  setCheckedNodes: React.Dispatch<React.SetStateAction<number[]>>;
  expandedNodes: number[];
  setExpandedNodes: React.Dispatch<React.SetStateAction<number[]>>;
}

const PreferencesRegionsBar: React.FC<PreferencesRegionsBarProps> = ({
  checkedNodes,
  setCheckedNodes,
  expandedNodes,
  setExpandedNodes,
}) => {
  return (
    <div className={style.regionsContainer}>
      <div className={style.dropdown}>
        <button className={style.dropdownBtn}>
          <img
            className={style.downArrowImg}
            src={downArrow}
            alt="down arrow"
          />
          איזור
        </button>

        <ul className={style.ulContent}>
          <CheckboxTree
            checkedNodes={checkedNodes}
            setCheckedNodes={setCheckedNodes}
            expandedNodes={expandedNodes}
            setExpandedNodes={setExpandedNodes}
          />
        </ul>
      </div>
    </div>
  );
};

export default PreferencesRegionsBar;
