import style from './PlaceDetails.module.css';
import TitleAndDescription from './components/TitleAndDescription/TitleAndDescription';
import Days from './components/Days/Days';
import chatIcon from '../../assets/images/chat-icon-white.svg';
import Header from '../../components/Header/Header';
import arrowLeft from '../../assets/images/arrow-left.svg';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPlaceById } from '../../api/services/api';
import { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';

interface MatchParams {
  placeId: string;
}

const PlaceDetails: React.FC = () => {
  const history = useHistory();
  const { placeId } = useParams<MatchParams>();
  const { data, isLoading } = useQuery(['place', placeId], getPlaceById, {
    enabled: !!placeId,
  });

  const place = data ? data.place : null;

  if (isLoading) return <Spinner />;

  return (
    place && (
      <div className={style.container}>
        <Header>
          <Link to={{ pathname: '/' }}>
            <img src={arrowLeft} alt="arrow left" />
          </Link>
        </Header>
        <img className={style.placeImg} src={place.placeImage} alt="" />
        <div className={style.titleAndDescriptionContainer}>
          <TitleAndDescription
            title={place.placeName}
            description={place.description}
          />
          <TitleAndDescription
            title={'מה אנחנו מחפשים?'}
            description={place.audience}
          />
          <TitleAndDescription
            title={'ימים פעילים בשבוע'}
            description={<Days days={place.availableDays} />}
          />
          <TitleAndDescription title={'כתובת'} description={place.address} />
        </div>
        <button
          onClick={() => history.push(`/chat/${place?.user}`)}
          className={style.mentooBtn}
        >
          <span>יש מצב שזה מנטו</span>
          <img src={chatIcon} alt="chat" />
        </button>
      </div>
    )
  );
};

export default PlaceDetails;
