import style from "./PlaceDetails.module.css";
import TitleAndDescription from "./components/TitleAndDescription/TitleAndDescription";
import Days from "./components/Days/Days";
import chatIcon from '../../assets/images/chat-icon-white.svg'
import Header from "../../components/Header/Header";
import arrowLeft from '../../assets/images/arrow-left.svg'
import { Link } from "react-router-dom";
import { VOLUNTEER_PAGE } from "../../routes/routePath";
interface PlaceDetailsProps {
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

const PlaceDetails: React.FC<PlaceDetailsProps>=({
place
}) =>{
    
const {
      id= 1,
      fullName= 'מרכז שקר כלשהו',
      pic= 'https://www.w3schools.com/howto/img_avatar.png',
      details= 'לא עושים כאן כלום בדוק',
      days= ['ראשון', 'שלישי'],
      city= 'Netivot',
      address= 'אזור השפלה',
      looksFor='lo yodea',
      icon= 'https=//www.w3schools.com/howto/img_avatar.png',
    } = place={};
  return (
    <div className={style.container}>
        <Header>
            <Link to={VOLUNTEER_PAGE}>
            <img src={arrowLeft} alt="arrow left"/>
            </Link>
        </Header>
      <img className={style.placeImg} src={pic} alt="" />
      <div className={style.titleAndDescriptionContainer}>
      <TitleAndDescription title={fullName} description={details} />
      <TitleAndDescription
        title={"מה אנחנו מחפשים?"}
        description={looksFor}
      />
      <TitleAndDescription
        title={"ימים פעילים בשבוע"}
        description={<Days days={days} />}
      />
      <TitleAndDescription title={"כתובת"} description={address} />
      </div>
      <button className={style.mentooBtn}>
        <span>
          יש מצב שזה מנטו
        </span>
        <img src={chatIcon} alt="chat" />
      </button>
    </div>
  );
}

export default PlaceDetails;