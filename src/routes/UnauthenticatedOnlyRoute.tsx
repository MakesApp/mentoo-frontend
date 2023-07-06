import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../context/useAuth';
import { PLACE_PAGE, VOLUNTEER_PAGE } from './routePath';

interface Props {
  path: string | string[];
  component: React.ComponentType<any>;
}

const UnauthenticatedOnlyRoute: React.FC<Props> = ({
  path,
  component: Component,
}) => {
  const { isAuthenticated,user } = useAuthContext();

  return (
    <Route
      path={path}
      render={(props) =>
        isAuthenticated&&user ? (
          <Redirect
            to={user.role === 'volunteer' ? VOLUNTEER_PAGE : PLACE_PAGE}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default UnauthenticatedOnlyRoute;
