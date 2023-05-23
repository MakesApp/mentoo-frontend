import style from "./PlaceDetails.module.css";
import TitleAndDescription from "./components/TitleAndDescription/TitleAndDescription";
import Days from "./components/Days/Days";
interface Place {
  placeDetails: string;
  placeImage: string;
  placeLooksFor: string;
  placeFullName: string;
  placeAvailableDays: string[];
  placeAddress: string;
}

const PlaceDetails: React.FC<PlaceCardProps>=({
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
      <img className={style.placeImg} src={placeImage} alt="" />
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
      <button className={style.mentooBtn}>
        <span>
          <img src={''} />
          יש מצב שזה מנטו
        </span>
      </button>
    </div>
  );
}

export default PlaceDetails;