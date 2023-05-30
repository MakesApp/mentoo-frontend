import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import UnauthenticatedOnlyRoute from './UnauthenticatedOnlyRoute';
import {
  VOLUNTEER_PAGE,
  PLACE_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  PLACE_DETAILS,
} from './routePath';
import RestrictedRoute from './RestrictedRoute';
import PublicRoute from './PublicRoute';
import Volunteer from '../pages/Volunteer/Volunteer';
import Register from '../pages/Register/Register';
import PlaceDetails from '../pages/PlaceDetails/PlaceDetails';
import Place from '../pages/Place/Place';

const RoutesConfig: React.FC = () => {
  return (
    <Switch>
      <RestrictedRoute
        allowedRoles={['volunteer']}
        fallbackPath={LOGIN_PAGE}
        component={Place}
      /> 
      <UnauthenticatedOnlyRoute  path={['/', LOGIN_PAGE]} component={Login}/>
      <UnauthenticatedOnlyRoute path={REGISTER_PAGE} component={Register}/>
      <RestrictedRoute
        path={PLACE_DETAILS}
        allowedRoles={['volunteer']}
        fallbackPath={LOGIN_PAGE}
        component={PlaceDetails}
      /> 
      <RestrictedRoute
        allowedRoles={['volunteer']}
        fallbackPath={LOGIN_PAGE}
        component={Volunteer}
      /> 
      
    </Switch>
  );
};

export default RoutesConfig;
