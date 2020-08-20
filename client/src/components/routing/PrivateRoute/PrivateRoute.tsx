import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { PrivateRouteProps, PrivateRouteState } from './PrivateRoute.interface';
import { useTypedSelector } from '../../../reducers';

function PrivateRoute({
  exact,
  component: Component,
  ...rest
}: PrivateRouteProps) {
  const { isAuthenticated, loading }: PrivateRouteState = useTypedSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? null : isAuthenticated ? (
          <Component {...props} />
        ) : (
            <Redirect to='/login' />
          )
      }
    />
  );
}

export default PrivateRoute;
