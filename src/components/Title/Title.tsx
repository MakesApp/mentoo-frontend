import style from './Title.module.css';

interface TitleProps {
  title: string;
  subTitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <h2 className={style.subTitle}>{subTitle}</h2>
    </div>
  );
};

export default Title;
