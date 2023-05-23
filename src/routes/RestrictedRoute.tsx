import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/useAuth';

interface RestrictedRouteProps {
  path: string;
  allowedRoles: string[];
  fallbackPath: string;
  component: React.ComponentType;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  path,
  allowedRoles,
  fallbackPath,
  component: Component,
}) => {
  const { userRole, isAuthenticated } = useAuthContext();
  const history = useHistory();

  // If user is authenticated and has allowed role, render the Component, 
  // else navigate to fallback path.
  React.useEffect(() => {
    
    if (!(isAuthenticated && allowedRoles.includes(userRole))) {
      history.push(fallbackPath);
    }
  }, [isAuthenticated, userRole, allowedRoles, fallbackPath]);

  // Always return a Route component.
  return <Component/>
};

export default RestrictedRoute;
