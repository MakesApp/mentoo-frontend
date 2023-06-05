import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import WhiteChatIcon from '../../../../assets/images/chat-icon-white.svg';
import vIcon from '../../../../assets/images/v-icon.svg';
import xIcon from '../../../../assets/images/Xicon.png';
import { IPlace } from '../../../../types/IPlace';
import style from './PlaceCard.module.css';

interface PlaceCardProps {
  place: IPlace;
  moveToLast: (placeId: string) => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({place, moveToLast}) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useHistory();
  const { placeImage, placeName ,_id:placeId , description }=place;
  
  return (
    <div className={style.placeContainer}>
      <Link to={{pathname:`/place/${placeId}/details`}} className={style.place}>
        <div className={style.imageContainer}>
          <img className={style.mainImg} src={placeImage} alt="" />
        </div>
      </Link>

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
            if (!isClicked) {
              moveToLast(placeId);
            }
            setIsClicked(false);
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
          <p className={style.placeName}>{placeName}</p>
          <p className={style.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
