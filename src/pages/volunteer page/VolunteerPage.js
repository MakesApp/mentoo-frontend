import React, { useState } from "react";

import PersonalData from "./components/PersonalData/PersonalData";
import PlaceCard from "./components/PlaceCard/PlaceCard";
import PreferencesDaysBar from "./components/PreferencesDaysBar/PreferencesDaysBar";
import PreferencesRegionsBar from "./components/PreferencesRegionsBar/PreferencesRegionsBar";
import * as S from "./VolunteerPage.style";

function VolunteerPage() {
  const [places, setPlaces] = useState([
    {
      id: 1,
      fullName: "מרכז שקר כלשהו",
      pic: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/12/10/1321/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.jpg/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.16x9.jpg",
      details: "לא עושים כאן כלום בדוק",
      days: "need to think how to store that",
      city: "Netivot",
      address: "some address",
      icon: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 2,
      fullName: "מרכז שקר אחר",
      pic: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/12/10/1321/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.jpg/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.16x9.jpg",
      details: "עושים כאן כלום בדוק",
      days: "need to think how to store that",
      city: "Netivot",
      address: "some address",
    },
  ]);

  return (
    <div>
      <div>
        <PersonalData />

        <S.DaysAndRegions>
          <PreferencesDaysBar />
          <PreferencesRegionsBar />
        </S.DaysAndRegions>

        {places.map((place) => {
          return (
            <PlaceCard
              placeId={place.id}
              key={place.id}
              placePic={place.pic}
              placeFullName={place.fullName}
              placeDetails={place.details}
            />
          );
        })}
      </div>
    </div>
  );
}

export default VolunteerPage;
