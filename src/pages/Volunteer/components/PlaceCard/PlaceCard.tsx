import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import WhiteChatIcon from '../../../../assets/images/chat-icon-white.png';
import vIcon from '../../../../assets/images/Vicon.png';
import xIcon from '../../../../assets/images/Xicon.png';
import style from './PlaceCard.module.css';

const PlaceCard: React.FC<PlaceCardProps> = ({ placeId, placePic, placeFullName, placeDetails }) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useHistory();

  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={style.placeContainer}>
      <button onClick={handleCardClick} className={style.place}>
        <div className={style.imageContainer}>
          <img className={style.mainImg} src={placePic} alt="" />
        </div>
      </button>

      <div className={style.btnsContainer}>
    
        <button
          className={`${style.actionButton} ${isClicked ? style.bgGreen : ''}`}
          onClick={() => {
            if (isClicked) {
              navigate('');
            }
            setIsClicked(true);
          }}
        >
          <img className={style.chatButtonImg} src={isClicked ? WhiteChatIcon : vIcon} alt="chat icon" />
        </button>
            <button
          className={style.actionButton}
          onClick={() => {
            if (isClicked) {
              setIsClicked(false);
            }
          }}
        >
          <img className={style.buttonsImg} src={xIcon} alt="X icon" />
        </button>
      </div>

      <div className={style.placeInfo}>
        <img
          className={style.placeInfoAvatar}
          src={'https://www.w3schools.com/howto/img_avatar.png'}
          alt="place icon"
        />
        <div>
          <p>{placeFullName}</p>
          <p>{placeDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
