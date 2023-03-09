import React from "react";
import AvailableDays from "../AvailableDays/AvailableDays";
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription";
import * as S from "./FullPlaceDetails.style";
import WhiteChatIcon from "../../../../assets/imgs/chat-icon-white.png";

function FullPlaceDetails({
  placeDetails,
  placeImage,
  placeLooksFor,
  placeFullName,
  placeAvailableDays,
  placeAddress,
}) {
  return (
    <div>
      <S.PlaceImage src={placeImage} alt="" />
      <TitleAndDescription title={placeFullName} description={placeDetails} />
      <TitleAndDescription
        title={"מה אנחנו מחפשים?"}
        description={placeLooksFor}
      />
      <TitleAndDescription
        title={"ימים פעילים בשבוע"}
        description={<AvailableDays days={placeAvailableDays} />}
      />
      <TitleAndDescription title={"כתובת"} description={placeAddress} />
      <S.MentooButton>
        <span>
          <img src={WhiteChatIcon} />
          יש מצב שזה מנטו
        </span>
      </S.MentooButton>
    </div>
  );
}

export default FullPlaceDetails;
