import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import UnauthenticatedOnlyRoute from './UnauthenticatedOnlyRoute';
import {
  VOLUNTEER_PAGE,
  PLACE_PAGE,
  LOGIN_PAGE,
  HOME_PAGE,
  REGISTER_PAGE,
} from './routePath';
import Home from '../pages/Home/Home';
import RestrictedRoute from './RestrictedRoute';
import PublicRoute from './PublicRoute';
import Volunteer from '../pages/Volunteer/Volunteer';
import Register from '../pages/Register/Register';

const RoutesConfig: React.FC = () => {
  return (
    <Switch>
      <RestrictedRoute
          path={VOLUNTEER_PAGE}
          allowedRoles={['volunteer']}
          fallbackPath={LOGIN_PAGE}
          component={Volunteer}
        /> 
      {/* <RestrictedRoute
          path={PLACE_PAGE}
          allowedRoles={['place']}
          fallbackPath={LOGIN_PAGE}
          component={PlacePage}
        />  */}
      <UnauthenticatedOnlyRoute path={REGISTER_PAGE} component={Register}/>
       <UnauthenticatedOnlyRoute path={LOGIN_PAGE} component={Login}/>
       <UnauthenticatedOnlyRoute path={HOME_PAGE} component={Home}  />
       {/* Remove the duplicate LOGIN_PAGE route */}
    </Switch>
  );
};

export default RoutesConfig;
