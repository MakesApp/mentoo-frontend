import React, { useState } from "react";
import * as S from "./PersonalData.style";

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 10vh;
  background: #7030a0;
  color: #ffffff;
  font-family: "pauza", sans-serif;
  font-wight: bold;

  .personal-info {
    direction: rtl;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .volunteering-hours {
    color: #8323ac;
    font-weight: bold;
    font-size: 20px;
    background: #ffffff;
    border-radius: 50%;
    padding: 0.7rem 0.5rem;
  }
`;
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
