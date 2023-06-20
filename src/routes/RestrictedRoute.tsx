import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import { useAuthContext } from '../context/useAuth';

interface RestrictedRouteProps {
  path: string;
  allowedRoles: string[];
  fallbackPath: string;
  component: React.ComponentType<any>;
  contextProvider?: React.ComponentType<any>; // Optional contextProvider prop
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  path,
  allowedRoles,
  fallbackPath,
  component: Component,
  contextProvider: ContextProvider,
}) => {
  const { user, isLoading } = useAuthContext();

  if (isLoading) {
    return <Spinner />; // or any loading spinner component
  }

  return (
    <Route
      path={path}
      render={(props) =>
        user && allowedRoles.includes(user.role) ? (
          ContextProvider ? ( // Check if ContextProvider is given
            <ContextProvider>
              <Component {...props} />
            </ContextProvider> // Wrap Component with ContextProvider
          ) : (
            <Component {...props} />
          ) // If not, render Component as is
        ) : (
          <Redirect to={fallbackPath} />
        )
      }
    />
  );
};

export default RestrictedRoute;
