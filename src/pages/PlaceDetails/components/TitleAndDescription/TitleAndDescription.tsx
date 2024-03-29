import React, { ReactNode } from 'react';
import style from './TitleAndDescription.module.css';

interface TitleAndDescriptionProps {
  title: string;
  description: string | ReactNode;
}

const TitleAndDescription: React.FC<TitleAndDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.description}>{description}</div>
    </div>
  );
};

export default TitleAndDescription;
