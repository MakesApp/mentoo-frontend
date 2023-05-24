import style from "./PlaceDetails.module.css";
import TitleAndDescription from "./components/TitleAndDescription/TitleAndDescription";
import Days from "./components/Days/Days";
import chatIcon from '../../assets/images/chat-icon-white.svg'
import Header from "../../components/Header/Header";
interface PlaceDetailsProps {
  placeDetails: string;
  placeImage: string;
  placeLooksFor: string;
  placeFullName: string;
  placeAvailableDays: string[];
  placeAddress: string;
}

const PlaceDetails: React.FC<PlaceDetailsProps>=({
  placeDetails,
  placeImage,
  placeLooksFor,
  placeFullName,
  placeAvailableDays,
  placeAddress,
}) =>{
    console.log(placeAvailableDays);
    
  return (
    <div className={style.container}>
        <Header/>
      <img className={style.placeImg} src={placeImage} alt="" />
      <div className={style.titleAndDescriptionContainer}>
      <TitleAndDescription title={placeFullName} description={placeDetails} />
      <TitleAndDescription
        title={"מה אנחנו מחפשים?"}
        description={placeLooksFor}
      />
      <TitleAndDescription
        title={"ימים פעילים בשבוע"}
        description={<Days days={placeAvailableDays} />}
      />
      <TitleAndDescription title={"כתובת"} description={placeAddress} />
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