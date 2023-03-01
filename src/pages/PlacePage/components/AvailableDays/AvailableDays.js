import React from "react";
import * as S from "./AvailableDays.style";

function AvailableDays({ days }) {
  return (
    <S.DaysBar>
      <h2>ימים פעילים בשבוע</h2>
      {days.map((day) => (
        <span>{`${day}, `}</span>
      ))}
    </S.DaysBar>
  );
}

export default AvailableDays;
