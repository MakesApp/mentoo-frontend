import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

function VolunteerPage() {
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    fullName: "Lord Voldermot",
    volunteeringTime: 5,
    project: "Hogwarts",
  });
  const [places, setPlaces] = useState([
    {
      id: 1,
      fullName: "place1",
      pic: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/12/10/1321/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.jpg/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.16x9.jpg",
      details: "loremmmm",
      days: "need to think how to store that",
      city: "Netivot",
      address: "some address",
    },
    {
      id: 2,
      fullName: "place2",
      pic: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/12/10/1321/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.jpg/Hyatt-Place-Paris-Charles-De-Gaulle-Airport-P001-Exterior.16x9.jpg",
      details: "loremmmm",
      days: "need to think how to store that",
      city: "Netivot",
      address: "some address",
    },
  ]);
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div>
      <p>Hello {currentUser.fullName}</p>
      <p>your volunteering hours : {currentUser.volunteeringTime}</p>
      <br></br>
      {places.map((place) => {
        return (
          <div>
            <Link to={`/places/${place.id}`}>
              <img src={place.pic} style={{ height: "100px" }}></img>
            </Link>
            <button>X</button>
            <button
              onClick={() => {
                navigate("/chat");
              }}
            >
              V
            </button>

            <p>Name : {place.fullName}</p>
            <p>Address : {place.address}</p>
            <p>City : {place.city}</p>
          </div>
        );
      })}
    </div>
  );
}

export default VolunteerPage;
