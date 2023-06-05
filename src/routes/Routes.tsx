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
  CHAT_PAGE,
} from './routePath';
import RestrictedRoute from './RestrictedRoute';
import PublicRoute from './PublicRoute';
import Volunteer from '../pages/Volunteer/Volunteer';
import Register from '../pages/Register/Register';
import PlaceDetails from '../pages/PlaceDetails/PlaceDetails';
import Place from '../pages/Place/Place';
import Chat from '../pages/Chat/Chat';

const RoutesConfig: React.FC = () => {
  return (
    <Switch>
  <UnauthenticatedOnlyRoute path={LOGIN_PAGE} component={Login}/>
  <RestrictedRoute
    path={CHAT_PAGE}
    allowedRoles={['volunteer','place']}
    fallbackPath={LOGIN_PAGE}
    component={Chat}
  />
  <RestrictedRoute
    path={PLACE_PAGE}
    allowedRoles={['place']}
    fallbackPath={LOGIN_PAGE}
    component={Place}
  /> 
  <UnauthenticatedOnlyRoute path={REGISTER_PAGE} component={Register}/>
  <RestrictedRoute
    path={PLACE_DETAILS}
    allowedRoles={['volunteer']}
    fallbackPath={LOGIN_PAGE}
    component={PlaceDetails}
  /> 
  <RestrictedRoute
    path={VOLUNTEER_PAGE}
    allowedRoles={['volunteer']}
    fallbackPath={LOGIN_PAGE}
    component={Volunteer}
  /> 
  <UnauthenticatedOnlyRoute path="/" component={Login}/>
</Switch>

  );
};

export default RoutesConfig;
