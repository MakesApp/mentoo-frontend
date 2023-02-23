import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { days } from "./days";
import downArrow from "../../../../assets/imgs/downArrow.png";

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
function PreferencesDaysBar() {
  const [checkedState, setCheckedState] = useState(
    new Array(days.length).fill(false)
  );
  const [availableDays, setAvailableDays] = useState("");

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    const daysPeeked = updatedCheckedState.map((item, index) => {
      return item === true ? days[index].name : item;
    });
    const filteredDaysPeeked = daysPeeked.filter((item) => item !== false);
    setAvailableDays(filteredDaysPeeked);
    setCheckedState(updatedCheckedState);
    console.log(availableDays);
  };

  return (
    <div>
      <DaysDropdown>
        <div className="dropdown">
          <button className="dropbtn">
            <span className="rotate">
              <img src={downArrow} alt="down arrow"></img>{" "}
            </span>
            ימי התנדבות
          </button>
          <ul className="dropdown-content">
            {days.map(({ name }, index) => {
              return (
                <li key={index}>
                  <div className="days-list-item">
                    <div>
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                      />
                      <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </DaysDropdown>
    </div>
  );
}

export default PreferencesDaysBar;
