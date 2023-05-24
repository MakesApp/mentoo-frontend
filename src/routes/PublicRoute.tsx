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
  const { user } = useAuthContext();
  const history = useHistory();

  React.useEffect(() => {
    if (user) {
      history.push(fallbackPath);
    }
  }, [user, fallbackPath]);

  // Always return a Route component.
  return <Component/>;
};

export default PublicRoute;
