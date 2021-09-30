import { Redirect, Route as ReactRoute } from "react-router-dom";
import { Route } from "..";
import { Url } from "../../constants";

export const PrivateRoute = ({ path, exact, children, user }: Route) => (
  <ReactRoute
    path={path}
    exact={exact}
    render={() =>
      !user ? <Redirect to={{ pathname: Url.ACCESS_DENIED }} /> : children
    }
  />
);
