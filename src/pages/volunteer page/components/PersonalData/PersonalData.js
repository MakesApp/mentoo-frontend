import React, { useState } from "react";
import * as S from "./PersonalData.style";

function PersonalData() {
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    fullName: "Lord Voldermot",
    volunteeringTime: 118,
    project: "מחוברים לחיים",
  });

  return (
    <div>
      <S.DataContainer>
        <S.PersonalInfo>
          <S.VolHours>{currentUser.volunteeringTime}</S.VolHours>
          <p>
            שעות <br />
            ההתנדבות <br />
            שלי
          </p>
        </S.PersonalInfo>
        <div>
          <p>"{currentUser.project}"#</p>
        </div>
      </S.DataContainer>
    </div>
  );
}

export default PersonalData;
