import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import VolunteerPage from "../pages/volunteer page/VolunteerPage";
import PlacePage from "../components/PlacePage";
import { constants } from "./constants";
import Protected from "./ProtectedRoutes";
function ConfigRoutes() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <Routes>
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
