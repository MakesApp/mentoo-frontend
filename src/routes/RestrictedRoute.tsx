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
  const navigate = useHistory();

  // If user is authenticated and has allowed role, render the Component, 
  // else navigate to fallback path.
  React.useEffect(() => {
    console.log('aa');
    
    if (!(isAuthenticated && allowedRoles.includes(userRole))) {
      console.log('ss');
      
      navigate(fallbackPath);
    }
  }, [isAuthenticated, userRole, allowedRoles, navigate, fallbackPath]);

  // Always return a Route component.
  return <Route path={path} element={isAuthenticated && allowedRoles.includes(userRole) ? <Component /> : null} />;
};

export default RestrictedRoute;
