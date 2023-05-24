import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/useAuth';

interface RestrictedRouteProps {
  allowedRoles: string[];
  fallbackPath: string;
  component: React.ComponentType;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  allowedRoles,
  fallbackPath,
  component: Component,
}) => {
  const { user } = useAuthContext();
  const history = useHistory();

  // If user is authenticated and has allowed role, render the Component, 
  // else navigate to fallback path.
  React.useEffect(() => {
    
    if (!(user && allowedRoles.includes(user.role))) {
      history.push(fallbackPath);
    }
  }, [user, allowedRoles, fallbackPath]);

  // Always return a Route component.
  return <Component/>
};

export default RestrictedRoute;
