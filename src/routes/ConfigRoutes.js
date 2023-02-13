import React from "react";
import { Routes, Route } from "react-router-dom";
import VolunteerPage from "../pages/volunteer page/components/VolunteerPage";
import PlacePage from "../components/PlacePage";
import { constants } from "./constants";
import HomePage from "../pages/homepage/HomePage";

function configRoutes() {
  return (
    <Routes>
      <Route path={constants.HOME} element={<HomePage />} />
      <Route path={constants.VOLUNTEERS} element={<VolunteerPage />} />
      <Route path={constants.PLACE} element={<PlacePage />} />
    </Routes>
  );
}

export default configRoutes;
