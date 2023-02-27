import React from "react";
import * as S from "./PreferencesDaysBar.style";
import { useState } from "react";
import styled from "styled-components";
import { days } from "./constants";
import downArrow from "../../../../../assets/imgs/downArrow.png";

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
    console.log(filteredDaysPeeked);
    setCheckedState(updatedCheckedState);
  };

  return (
    <div>
      <S.Dropdown>
        <S.Button>
          <S.downArrowImg src={downArrow} alt="down arrow" />
          ימי התנדבות
        </S.Button>

        <S.UlContent>
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
        </S.UlContent>
      </S.Dropdown>
    </div>
  );
}

export default PreferencesDaysBar;
