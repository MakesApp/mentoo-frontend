import React from 'react';
import { Switch } from 'react-router-dom';
// import RestrictedRoute from './RestrictedRoute';
// import PublicRoute from './PublicRoute';
// import {
//   VOLUNTEER_PAGE,
//   PLACE_PAGE,
//   LOGIN_PAGE,
//   HOME_PAGE,
// } from './routePaths';
// import Login from 'pages/Login/Login';

const RoutesConfig: React.FC = () => {
  return (
    <Switch>
      {/* <RestrictedRoute
          path={VOLUNTEER_PAGE}
          allowedRoles={['volunteer']}
          fallbackPath={LOGIN_PAGE}
          component={VolunteerPage}
        /> */}
      {/* <RestrictedRoute
          path={PLACE_PAGE}
          allowedRoles={['place']}
          fallbackPath={LOGIN_PAGE}
          component={PlacePage}
        /> */}
      {/* <PublicRoute
          path={LOGIN_PAGE}
          fallbackPath={VOLUNTEER_PAGE}
          component={<Logi>}
        /> */}
      {/* <Route path={HOME_PAGE} element={<HomePage />} /> */}
    </Switch>
  );
};

export default RoutesConfig;
