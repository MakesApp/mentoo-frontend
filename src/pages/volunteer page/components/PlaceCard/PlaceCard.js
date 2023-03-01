import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import chatIcon from "../../../../assets/imgs/chat-icon.png";
import vIcon from "../../../../assets/imgs/Vicon.png";
import xIcon from "../../../../assets/imgs/Xicon.png";
import * as S from "./PlaceCard.style";
import { constants } from "../../../../routes/constants";
function PlaceCard({ placeId, placePic, placeFullName, placeDetails }) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Link to={`/places/${placeId}`}>
        <S.ImageContainer>
          <S.MainImg src={placePic} alt="" />
        </S.ImageContainer>
      </Link>
      <S.BtnsContainer>
        <S.Btns>
          <S.ButtonsImg src={xIcon} alt="X icon" />
        </S.Btns>
        <S.Btns
          onClick={() => {
            if (isClicked) {
              navigate(`${constants.CHAT}`);
            }
            setIsClicked(true);
          }}
        >
          {isClicked ? (
            <S.ButtonsImg src={chatIcon} alt="chat icon" />
          ) : (
            <S.ButtonsImg src={vIcon} alt="V icon" />
          )}
        </S.Btns>
      </S.BtnsContainer>
      <S.PlaceInfo>
        <S.PlaceInfoAvatar
          src={"https://www.w3schools.com/howto/img_avatar.png"}
          alt="place icon"
        />

        <div>
          <p> {placeFullName}</p>
          <p> {placeDetails}</p>
        </div>
      </S.PlaceInfo>
    </div>
  );
}

export default PlaceCard;
