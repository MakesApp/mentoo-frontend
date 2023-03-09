import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import VolunteerPage from "../pages/VolunteerPage/VolunteerPage";
import PlacePage from "../pages/PlacePage/PlacePage";
import { constants } from "./constants";
import Protected from "./ProtectedRoutes";
import HomePage from "../pages/homepage/HomePage";
function ConfigRoutes() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <Routes>
      <Route path={constants.HOME} element={<HomePage />} />
      <Route
        path={constants.VOLUNTEERS}
        element={
          <Protected isSignedIn={isSignedIn}>
            <VolunteerPage />
          </Protected>
        }
      />

      <Route path={constants.PLACE} element={<PlacePage />} />
    </Routes>
  );
}

export default ConfigRoutes;
