import HomePage from "pages/homepage/HomePage";
import Login from "pages/Login/Login";
import PlacePage from "pages/PlacePage/PlacePage";
import VolunteerPage from "pages/VolunteerPage/VolunteerPage";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./constants";
import ProtectedRoute from "./ProtectedRoute";
function ConfigRoutes() {
  return (
    <Routes>
      <Route path={routes.LOGIN} element={<Login />} />
      <Route path={routes.HOME} element={<HomePage />} />
      <Route
        path={routes.VOLUNTEERS}
        element={
          <ProtectedRoute element={<VolunteerPage />} roles={["volunteer"]} />
        }
      />
      <Route
        path={routes.PLACE}
        element={<ProtectedRoute element={<PlacePage />} roles={["place"]} />}
      />
    </Routes>
  );
}

export default ConfigRoutes;
