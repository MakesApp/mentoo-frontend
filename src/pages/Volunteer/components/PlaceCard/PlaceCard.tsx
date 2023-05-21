import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import WhiteChatIcon from "../../../../assets/images/chat-icon-white.png";
import vIcon from "../../../../assets/images/Vicon.png";
import xIcon from "../../../../assets/images/Xicon.png";
import "./PlaceCard.css";

const PlaceCard: React.FC<PlaceCardProps> = ({ placeId, placePic, placeFullName, placeDetails }) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleCardClick=(e)=>{
    e.stopPropagation();
  }
  return (
    <div className="container">
      <button onClick={handleCardClick} className="place">
        <div className="image-container">
          <img className="main-img" src={placePic} alt="" />
        </div>
        <div className="btns-container">
        <button className="action-button" onClick={()=>{
          if(isClicked){setIsClicked(false)}
        }}>
          <img className="buttons-img" src={xIcon} alt="X icon" />
        </button>
        <button
          className={`action-button ${isClicked ? 'bg-green':''}`}
          onClick={() => {
            if (isClicked) {
              navigate('');
            }
            setIsClicked(true);
          }}
        >
            <img className={`chat-button-img`} src={isClicked?WhiteChatIcon:vIcon} alt="chat icon" />
        </button>
      </div>
      </button>
      
      <div className="place-info">
        <img
          className="place-info-avatar"
          src={"https://www.w3schools.com/howto/img_avatar.png"}
          alt="place icon"
        />
        <div>
          <p> {placeFullName}</p>
          <p> {placeDetails}</p>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
