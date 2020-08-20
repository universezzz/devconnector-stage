import { RouteProps, RouteComponentProps } from 'react-router-dom';

export interface PrivateRouteProps extends RouteProps {
  exact: boolean;
  component:
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>;
}

export interface PrivateRouteState {
  isAuthenticated: boolean;
  loading: boolean;
}