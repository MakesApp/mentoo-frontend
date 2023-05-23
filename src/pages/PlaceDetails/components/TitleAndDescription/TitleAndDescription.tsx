import React from 'react';
import style from './TitleAndDescription.module.css';

interface TitleAndDescriptionProps {
  title: string;
  description: string;
}

const TitleAndDescription: React.FC<TitleAndDescriptionProps> = ({ title, description }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.descrdivption}>{description}</div>
    </div>
  );
};

export default TitleAndDescription;
