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

const PlaceCard: React.FC<PlaceCardProps> = ({ place, moveToLast }) => {
  const [isVClicked, setIsVClicked] = useState(false);
  const [isXClicked, setIsXClicked] = useState(false);
  const history = useHistory();
  const {
    placeImage,
    placeName,
    _id: placeId,
    description,
    user: placeUserId,
  } = place;

  return (
    <div className={style.placeContainer}>
      <Link
        to={{ pathname: `/place/${placeId}/details` }}
        className={style.place}
      >
        <div className={style.imageContainer}>
          <img className={style.mainImg} src={placeImage} alt="" />
          <div className={style.btnsContainer}>
            <button
              className={`${style.actionButton} ${isVClicked ? style.bgGreen : ''}`}
              onClick={() => {
                if (isVClicked) {
                  history.push(`/chat/${placeUserId}`);
                }
                setIsVClicked(true);
              }}
            >
              <img
                className={style.chatButtonImg}
                src={isVClicked ? WhiteChatIcon : vIcon}
                alt="chat icon"
              />
            </button>
            <button
              className={`${style.actionButton} ${isXClicked ? style.redBg : ''}`}
              onClick={() => {
                if (!isVClicked) {
                  moveToLast(placeId);
                  setIsXClicked(!isXClicked);
                } else setIsXClicked(false);
                setIsVClicked(false);
              }}
            >
              <img className={`${style.buttonsImg}`} src={xIcon} alt="X icon" />
            </button>
          </div>
        </div>
      </Link>

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
