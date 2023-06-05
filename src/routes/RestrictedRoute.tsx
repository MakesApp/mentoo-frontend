import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../context/useAuth';

interface RestrictedRouteProps {
  path: string;
  allowedRoles: string[];
  fallbackPath: string;
  component: React.ComponentType<any>;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({ path, allowedRoles, fallbackPath, component: Component }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>Loading...</div>; // or any loading spinner component
  }

  return (
    <Route 
      path={path}
      render={props =>
        user && allowedRoles.includes(user.role)
          ? <Component {...props} />
          : <Redirect to={fallbackPath} />
      }
    />
  );
};

export default RestrictedRoute;
