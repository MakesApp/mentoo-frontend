import React, { useState } from "react";
import { days } from "../../constants";
import downArrow from "../../../../assets/images/downArrow.png";
import "./PreferencesDaysBar.css";

const PreferencesDaysBar: React.FC = ({selectedDays,setSelectedDays}) => {
 
//   const [availableDays, setAvailableDays] = useState([]);

  const handleOnChange = (day: string): void => {
  
    if(selectedDays.includes(day)){
      const filteredDays= selectedDays.filter(selectedDay => selectedDay !== day);
      setSelectedDays(filteredDays)
        return;
    }
 
    setSelectedDays([...selectedDays,day]);
  };

  return (
    <div className="container">
      <div className="dropdown">
        <button className="dropdown-btn">
          <img className="downArrowImg" src={downArrow} alt="down arrow" />
       <span>   ימי התנדבות</span>
        </button>

        <ul className="ul-content">
          {days.map(({ name }, index) => {
            return (
              <li key={name}>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${name}`}
                      name={name}
                      value={name}
                      checked={selectedDays[name]}
                      onChange={() => handleOnChange(name)}
                    />
                    <label htmlFor={`custom-checkbox-${name}`}>{name}</label>
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
