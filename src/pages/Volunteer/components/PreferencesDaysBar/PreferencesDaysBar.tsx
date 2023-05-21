import React, { useState } from "react";
import { days } from "./constants";
import downArrow from "../../../../assets/images/downArrow.png";
import "./PreferencesDaysBar.css";

const PreferencesDaysBar: React.FC = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(days.length).fill(false)
  );
  const [availableDays, setAvailableDays] = useState([]);

  const handleOnChange = (position: number): void => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    const daysPeeked = updatedCheckedState.map((item, index) => {
      return item === true ? days[index].name : item;
    });
    const filteredDaysPeeked = daysPeeked.filter((item) => item !== false);
    setAvailableDays(filteredDaysPeeked);
    console.log(filteredDaysPeeked);
    setCheckedState(updatedCheckedState);
  };

  return (
    <div>
      <div className="dropdown">
        <button className="dropdown-btn">
          <img className="downArrowImg" src={downArrow} alt="down arrow" />
       <span>   ימי התנדבות</span>
        </button>

        <ul className="ul-content">
          {days.map(({ name }, index) => {
            return (
              <li key={index}>
                <div>
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
    </div>
  );
}

export default PreferencesDaysBar;
