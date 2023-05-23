
import React from 'react';
import {Route,useHistory} from 'react-router-dom'
import { useAuthContext } from '../context/useAuth';
import Home from '../pages/Home/Home';
import { HOME_PAGE, PLACE_PAGE, VOLUNTEER_PAGE } from './routePath';
interface Props {
  component: React.ComponentType;
}
const UnauthenticatedOnlyRoute = ({ component:Component }:Props) => {
  const { isAuthenticated,userRole } = useAuthContext();
  const history = useHistory();

  // If user is authenticated and has allowed role, render the Component, 
  // else navigate to fallback path.
  React.useEffect(() => {
      console.log('====================================');
      console.log(userRole,isAuthenticated);
      console.log('====================================');
    if ((isAuthenticated&&userRole )) {
     return history.push(userRole==='volunteer'?VOLUNTEER_PAGE:HOME_PAGE);
    }
  }, [isAuthenticated, userRole]);

  return userRole? <Component/>:<Home/>;
};
export default UnauthenticatedOnlyRoute;
