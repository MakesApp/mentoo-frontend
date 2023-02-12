import React from "react";
import { Routes, Route } from "react-router-dom";
import VolunteerPage from "../pages/volunteer page/components/VolunteerPage";
import PlacePage from "../components/PlacePage";
import { constants } from "./constants";

function configRoutes() {
  return (
    <Routes>
      <Route path={constants.VOLUNTEERS} element={<VolunteerPage />} />
      <Route path={constants.PLACE} element={<PlacePage />} />
      <Route path={constants.CHAT} element={<VolunteerPage />} />
      {/* <Route path={constants.CHAT} element={<Chat />} /> */}
    </Routes>
  );
}

export default configRoutes;
