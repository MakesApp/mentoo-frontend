import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import chatIcon from "../../../../assets/imgs/chat-icon.png";
import vIcon from "../../../../assets/imgs/Vicon.png";
import xIcon from "../../../../assets/imgs/Xicon.png";
import * as S from "./PlaceCard.style";

function PlaceCard(props) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Link to={`/places/${props.placeId}`}>
        <S.ImageContainer>
          <S.MainImg src={props.placePic} alt="" />
        </S.ImageContainer>
      </Link>
      <S.BtnsContainer>
        <S.Btns>
          <S.ButtonsImg src={xIcon} alt="X icon" />
        </S.Btns>
        <S.Btns
          onClick={() => {
            if (isClicked) {
              navigate("/chat");
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
          <p> {props.placeFullName}</p>
          <p> {props.placeDetails}</p>
        </div>
      </S.PlaceInfo>
    </div>
  );
}

export default PlaceCard;
