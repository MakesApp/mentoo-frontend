import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/useAuth';
import { VOLUNTEER_PAGE } from './routePath';

interface Props {
  path: string | string[];
  component: React.ComponentType;
}

const UnauthenticatedOnlyRoute = ({ path, component:Component }:Props) => {
  const { user } = useAuthContext();
  const history = useHistory();

  // If user is authenticated, navigate to appropriate path.
  React.useEffect(() => {
    if (user) {
      return history.push(user.role === 'volunteer' ? VOLUNTEER_PAGE : '/blublu');
    }
  }, [user]);

  // Always return a Route component.
  return (
    <Route path={path}>
      <Component/>
    </Route>
  );
};

export default UnauthenticatedOnlyRoute;
