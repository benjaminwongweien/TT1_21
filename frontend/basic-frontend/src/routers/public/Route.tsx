import { Route as ReactRoute } from "react-router-dom";
import { Route } from "..";

export const PublicRoute = ({ path, exact, children }: Route) => (
  <ReactRoute path={path} exact={exact} render={() => children} />
);
