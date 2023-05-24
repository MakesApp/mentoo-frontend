
import React from 'react';
import {Route,useHistory} from 'react-router-dom'
import { useAuthContext } from '../context/useAuth';
import {  PLACE_PAGE, VOLUNTEER_PAGE } from './routePath';
interface Props {
  component: React.ComponentType;
}
const UnauthenticatedOnlyRoute = ({ component:Component }:Props) => {
  const { user } = useAuthContext();
  const history = useHistory();
console.log('here');

  // If user is authenticated and has allowed role, render the Component, 
  // else navigate to fallback path.
  React.useEffect(() => {
    if ((user )) {
     return history.push(user.role==='volunteer'?VOLUNTEER_PAGE:'/blublu');
    }
  }, [user]);

  return <Component/>;
};
export default UnauthenticatedOnlyRoute;
