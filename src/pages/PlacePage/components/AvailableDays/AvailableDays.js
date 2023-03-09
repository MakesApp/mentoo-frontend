import React from "react";
import * as S from "./AvailableDays.style";
import { weekDays } from "./constants";

function AvailableDays({ days }) {
  function compareDays(weekArr, AvailableArr) {
    let jsxArr = [];
    for (let i = 0; i < weekArr.length; i++) {
      if (weekArr[i] === AvailableArr[i]) {
        jsxArr.push(<S.AvailableDayItem>{AvailableArr[i]}</S.AvailableDayItem>);
      } else {
        jsxArr.push(
          <S.NotAvailableDayItem>{weekArr[i]}</S.NotAvailableDayItem>
        );
      }
    }

    return jsxArr;
  }
  return (
    <>
      {/* <S.Title>ימים פעילים בשבוע</S.Title> */}
      <S.DaysBar>
        {compareDays(weekDays, days).map((day) => {
          console.log(day);

          return <>{day}</>;
        })}
      </S.DaysBar>
    </>
  );
}

export default AvailableDays;
