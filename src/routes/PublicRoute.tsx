import { useAuthContext } from 'context/useAuth';
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface PublicRouteProps {
  path: string;
  fallbackPath: string;
  component: React.ComponentType;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  path,
  fallbackPath,
  component: Component,
}) => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Route path={path} element={<Component />} />;
  } else {
    return <Navigate to={fallbackPath} />;
  }
};

export default PublicRoute;
