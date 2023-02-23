import React from "react";
import styled from "styled-components";
import downArrow from "../../../../assets/imgs/downArrow.png";
import CheckboxesTree from "../Filter/CheckboxesTree";

const DaysDropdown = styled.div`
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropbtn {
    margin-top: 5%;
    background-color: transparent;
    color: #7030a0;
    padding: 6px 25px;
    font-size: 16px;
    border: 2px solid #7060a0;
    border-radius: 13px;

    cursor: pointer;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content li {
    color: black;
    padding: 16px 10px;
    text-decoration: none;
    display: block;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .rotate img {
    padding-right: 10px;
  }
`;
function PreferencesRegionsBar() {
  return (
    <div>
      <DaysDropdown>
        <div className="dropdown">
          <button className="dropbtn">
            <span className="rotate">
              <img src={downArrow} alt="down arrow"></img>{" "}
            </span>
            איזור
          </button>
          <ul className="dropdown-content">
            <CheckboxesTree />
          </ul>
        </div>
      </DaysDropdown>
    </div>
  );
}

export default PreferencesRegionsBar;
