import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import chatIcon from "../../../assets/imgs/chat-icon.png";
import vIcon from "../../../assets/imgs/Vicon.png";
import xIcon from "../../../assets/imgs/Xicon.png";

const Card = styled.div`
  .image-container {
    margin: 5% 5%;
    height: 40vh;
  }
  .image-container img {
    width: 100%;
    height: 100%;
    border-radius: 10%;
  }
  button {
    border: none;
    background: #7030a0;
    height: 50px;
    width: 50px;
    margin-right: 5px;
    border-radius: 5%;
  }
  button img {
    height: 20px;
    width: 20px;
  }
  .button-container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: -20%;
    margin-bottom: 10%;
    margin-right: 7%;
  }
  .place-info {
    direction: rtl;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .place-info img {
    width: 10%;
    border-radius: 50%;
  }
  .place-info p:first-child {
    color: #7030a0;
    font-size: 16px;
    font-weight: bold;
  }
  .place-info p:last-child {
    color: #313131;
  }
`;

function PlaceCard(props) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Card>
        <Link to={`/places/${props.placeId}`}>
          <div className={"image-container"}>
            <img src={props.placePic} alt=""></img>
          </div>
        </Link>
        <div className={"button-container"}>
          <button>
            <img src={xIcon} alt="X icon"></img>
          </button>
          <button
            onClick={() => {
              if (isClicked) {
                navigate("/chat");
              }
              setIsClicked(true);
            }}
          >
            {isClicked ? (
              <img src={chatIcon} alt="chat icon"></img>
            ) : (
              <img src={vIcon} alt="V icon"></img>
            )}
          </button>
        </div>
        <div className={"place-info"}>
          <img
            src={"https://www.w3schools.com/howto/img_avatar.png"}
            alt="place icon"
          ></img>

          <div>
            <p> {props.placeFullName}</p>
            <p> {props.placeDetails}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PlaceCard;
