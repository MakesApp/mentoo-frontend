import React from "react";
import { useParams } from "react-router";

function Places() {
  const params = useParams();
  return <div>id : {params.placeId}</div>;
}

export default Places;
