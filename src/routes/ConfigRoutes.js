import React from "react";
import { Routes, Route } from "react-router-dom";
import VolunteerPage from "../pages/VolunteerPage/VolunteerPage";
import PlacePage from "../pages/PlacePage/PlacePage";
import { constants } from "./constants";

function configRoutes() {
  return (
    <Routes>
      <Route path={constants.VOLUNTEERS} element={<VolunteerPage />} />
      <Route path={constants.HOME} element={<VolunteerPage />} />
      <Route path={constants.PLACE} element={<PlacePage />} />
    </Routes>
  );
}

export default configRoutes;
