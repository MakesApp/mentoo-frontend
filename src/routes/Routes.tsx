import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import UnauthenticatedOnlyRoute from './UnauthenticatedOnlyRoute';
import {
  VOLUNTEER_PAGE,
  PLACE_PAGE,
  LOGIN_PAGE,
  HOME_PAGE,
} from './routePath';
import VolunteerPage from '../pages/Volunteer/Volunteer';
import Home from '../pages/Home/Home';
import RestrictedRoute from './RestrictedRoute';
import PublicRoute from './PublicRoute';

const RoutesConfig: React.FC = () => {
  return (
    <Switch>
      <RestrictedRoute
          path={VOLUNTEER_PAGE}
          allowedRoles={['volunteer']}
          fallbackPath={LOGIN_PAGE}
          component={VolunteerPage}
        /> 
      {/* <RestrictedRoute
          path={PLACE_PAGE}
          allowedRoles={['place']}
          fallbackPath={LOGIN_PAGE}
          component={PlacePage}
        />  */}
    
       <UnauthenticatedOnlyRoute path={LOGIN_PAGE} element={<Login/>} exact/>
       <Route path={HOME_PAGE} component={Home} exact />
       {/* Remove the duplicate LOGIN_PAGE route */}
    </Switch>
  );
};

export default RoutesConfig;
