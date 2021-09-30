import { ReactNode, useContext } from "react";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route as BrowserRoute,
} from "react-router-dom";
import { Url } from "../constants";
import { env } from "../env";
import { User, GlobalContext } from "../context";
import { PrivateRoute, privateRouteConfig } from "./private";
import { PublicRoute, publicRouteConfig } from "./public";

export interface RouteConfig {
  path: string;
  exact: boolean;
  children: ReactNode;
}

export interface Route {
  path: string;
  exact: boolean;
  children: ReactNode;
  user?: User;
}

export const MainRouter = () => {
  const { user } = useContext(GlobalContext);

  const publicRoutes = publicRouteConfig.map((config) => (
    <PublicRoute key={config.path} {...config} user={user}>
      {config.children}
    </PublicRoute>
  ));

  const privateRoutes = privateRouteConfig.map((config) => (
    <PrivateRoute key={config.path} {...config} user={user}>
      {config.children}
    </PrivateRoute>
  ));

  return (
    <BrowserRouter basename={env.server.path}>
      <Switch>
        {publicRoutes}
        {privateRoutes}
        <BrowserRoute
          render={() => (
            <Redirect
              key={"REDIRECT_FOR_NOT_FOUND"}
              to={{ pathname: Url.NOT_FOUND }}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
