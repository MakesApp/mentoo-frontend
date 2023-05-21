import React from "react";
import downArrow from "../../../../assets/images/downArrow.png";
import CheckboxesTree from "../CheckboxesTree/CheckboxesTree";
import "./PreferencesRegionsBar.css";

const PreferencesRegionsBar: React.FC = () => {
  return (
    <div>
      <div className="dropdown">
        <button className="dropdown-btn">
          <img className="downArrowImg" src={downArrow} alt="down arrow" />
          איזור
        </button>

        <ul className="ul-content">
          <CheckboxesTree />
        </ul>
      </div>
    </div>
  );
}

export default PreferencesRegionsBar;
