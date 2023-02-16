import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
// import Regions from "./Filter/Regions";
import PersonalData from "./PersonalData";
import PlaceCard from "./PlaceCard";

function VolunteerPage() {
  const [isClicked, setIsClicked] = useState(false);

  //     id: 1,
  //     fullName: "Lord Voldermot",
  //     volunteeringTime: 5,
  //     project: "Hogwarts",
  //   });
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
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div>
      <PersonalData />
      {/* <Regions /> */}

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
  );
}

export default VolunteerPage;
