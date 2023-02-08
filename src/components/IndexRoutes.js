import React from "react";
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";
import VolunteerPage from "../pages/volunteer page/components/VolunteerPage";
import PlacePage from "../components/PlacePage";

function IndexRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}

      {/* <Route path="/volunteers/:volunteerId" element={<VolunteerPage />} /> */}
      {/* need to be dynamic! */}
      <Route path="/volunteers" element={<VolunteerPage />} />

      <Route path="/places/:placeId" element={<PlacePage />} />
    </Routes>
  );
}

export default IndexRoutes;
