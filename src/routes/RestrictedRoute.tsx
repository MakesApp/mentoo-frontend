import { useAuthContext } from 'context/useAuth';
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

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
  if (isAuthenticated && allowedRoles.includes(userRole)) {
    return <Route path={path} element={<Component />} />;
  } else {
    return <Navigate to={fallbackPath} />;
  }
};

export default RestrictedRoute;
