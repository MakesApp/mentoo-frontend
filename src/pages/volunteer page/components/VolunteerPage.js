import React, { useState } from "react";
import styled from "styled-components";
import CheckboxesTree from "./Filter/CheckboxesTree";
import PersonalData from "./PersonalData";
import PlaceCard from "./PlaceCard";
import PreferencesBar from "./Preferences bar/PreferencesDaysBar";

const VolunteerData = styled.div`
  .days-and-regions {
    display: flex;
    align-items: space-between;
    justify-content: space-around;
  }
`;
function VolunteerPage() {
  const [places, setPlaces] = useState([
    {
      id: 1,
      fullName: "מרכז שקר כלשהו",
      pic:
        "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/12/10/1321/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.jpg/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.16x9.jpg",
      details: "לא עושים כאן כלום בדוק",
      days: "need to think how to store that",
      city: "Netivot",
      address: "some address",
      icon: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 2,
      fullName: "מרכז שקר אחר",
      pic:
        "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/12/10/1321/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.jpg/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.16x9.jpg",
      details: "עושים כאן כלום בדוק",
      days: "need to think how to store that",
      city: "Netivot",
      address: "some address",
    },
  ]);

  return (
    <div>
      <VolunteerData>
        <PersonalData />
        <div className="days-and-regions">
          <PreferencesBar />
          <PreferencesBar />
        </div>
        <CheckboxesTree />

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
      </VolunteerData>
    </div>
  );
}

export default VolunteerPage;
