import React, { useState } from "react";
import { useParams } from "react-router";
import FullPlaceDetails from "./components/FullPlaceDetails/FullPlaceDetails";

function Places() {
  const [places, setPlaces] = useState([
    {
      id: 1,
      fullName: "מרכז שקר כלשהו",
      pic: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/12/10/1321/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.jpg/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.16x9.jpg",
      details: "לא עושים כאן כלום בדוק",
      lookingFor: "אנחנו מחפשים ומחפשים ומחפשים",
      days: [null, "ב", null, "ד", null, null, null],
      city: "Netivot",
      address: "some address",
      icon: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 2,
      fullName: "מרכז שקר אחר",
      pic: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/12/10/1321/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.jpg/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.16x9.jpg",
      details: "עושים כאן כלום בדוק",
      lookingFor: " אנחנו מחפשים ומחפשים ומחפשים ושוב מחפשים",
      days: ["א", null, null, null, null, null, null],
      city: "Netivot",
      address: "some address",
    },
  ]);
  const params = useParams();
  return (
    <div>
      {places.map((place) => {
        if (place.id == params.placeId) {
          return (
            <div key={place.id}>
              <FullPlaceDetails
                placeImage={place.pic}
                placeFullName={place.fullName}
                placeDetails={place.details}
                placeLooksFor={place.lookingFor}
                placeAvailableDays={place.days}
                placeAddress={place.address}
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Places;
