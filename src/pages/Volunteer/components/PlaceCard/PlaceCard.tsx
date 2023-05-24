import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import WhiteChatIcon from '../../../../assets/images/chat-icon-white.svg';
import vIcon from '../../../../assets/images/Vicon.png';
import xIcon from '../../../../assets/images/Xicon.png';
import style from './PlaceCard.module.css';
interface PlaceCardProps {
  id: number;
  fullName: string;
  pic: string;
  details: string;
  days: string[];
  city: string;
  address: string;
  looksFor: string;
  icon: string;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place}) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useHistory();
const { pic, fullName, details ,id:placeId}=place;
  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={style.placeContainer}>
      <Link to={{pathname:`/place/${placeId}/details`}} className={style.place}>
        <div className={style.imageContainer}>
          <img className={style.mainImg} src={pic} alt="" />
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
          <p>{fullName}</p>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
