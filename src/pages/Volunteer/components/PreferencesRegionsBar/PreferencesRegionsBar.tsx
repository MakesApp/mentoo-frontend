import React, { useEffect, useState } from "react";
import downArrow from "../../../../assets/images/downArrow.png";
import CheckboxesTree from "../CheckboxesTree/CheckboxesTree";
import "./PreferencesRegionsBar.css";

const PreferencesRegionsBar: React.FC = ({regions,setRegions,expanded,setExpanded}) => {

  return (
    <div className="container">
      <div className="dropdown">
        <button className="dropdown-btn">
          <img className="downArrowImg" src={downArrow} alt="down arrow" />
          איזור
        </button>

        <ul className="ul-content">
          <CheckboxesTree regions={regions} setRegions={setRegions} expanded={expanded} setExpanded={setExpanded}/>
        </ul>
      </div>
    </div>
  );
}

export default PreferencesRegionsBar;
