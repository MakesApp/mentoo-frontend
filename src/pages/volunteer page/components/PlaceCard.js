import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PlaceCard(props) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Link to={`/places/${props.placeId}`}>
        <img src={props.placePic} style={{ height: "100px" }} alt=""></img>
      </Link>
      <button>X</button>
      <button
        onClick={() => {
          if (isClicked) {
            navigate("/chat");
          }
          setIsClicked(true);
        }}
      >
        {isClicked ? "Chat" : "V"}
      </button>

      <p>Name : {props.placeFullName}</p>
      <p>Address : {props.placeAddress}</p>
      <p>City : {props.placeCity}</p>
    </div>
  );
}

export default PlaceCard;
