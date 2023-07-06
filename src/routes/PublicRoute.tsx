import React from 'react';
import {  useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/useAuth';

interface PublicRouteProps {
  path: string;
  fallbackPath: string;
  component: React.ComponentType;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  fallbackPath,
  component: Component,
}) => {
  const { isAuthenticated } = useAuthContext();
  const history = useHistory();

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push(fallbackPath);
    }
  }, [isAuthenticated, fallbackPath]);

  // Always return a Route component.
  return <Component />;
};

export default PublicRoute;
