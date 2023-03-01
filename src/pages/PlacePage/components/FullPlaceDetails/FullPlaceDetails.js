import React from "react";
import AvailableDays from "../AvailableDays/AvailableDays";
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription";
import * as S from "./FullPlaceDetails.style";

function FullPlaceDetails({
  placeDetails,
  placeImage,
  placeLooksFor,
  placeFullName,
  placeAvailableDays,
  placeAddress,
}) {
  return (
    <div>
      <S.PlaceImage src={placeImage} alt="" />
      <TitleAndDescription title={placeFullName} description={placeDetails} />
      <TitleAndDescription
        title={"מה אנחנו מחפשים?"}
        description={placeLooksFor}
      />
      <AvailableDays days={placeAvailableDays} />
      <TitleAndDescription title={"כתובת"} description={placeAddress} />
    </div>
  );
}

export default FullPlaceDetails;
