import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/useAuth';

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
  const history = useHistory();

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push(fallbackPath);
    }
  }, [isAuthenticated, fallbackPath]);

  // Always return a Route component.
  return <Route path={path} element={!isAuthenticated ? <Component /> : null} />;
};

export default PublicRoute;
