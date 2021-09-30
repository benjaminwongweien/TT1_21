import { RouteConfig } from "..";
import { Url } from "../../constants";
import {
  AccessDeniedPage,
  HomePage,
  LoginPage,
  NotFoundPage,
} from "../../pages";
import { ChartsPage } from "../../pages/ChartsPage";

export const publicRouteConfig: RouteConfig[] = [
  {
    path: Url.HOME,
    exact: true,
    children: <HomePage />,
  },
  {
    path: Url.CHARTS,
    exact: true,
    children: <ChartsPage />,
  },
  {
    path: Url.LOGIN,
    exact: true,
    children: <LoginPage />,
  },
  {
    path: Url.ACCESS_DENIED,
    exact: true,
    children: <AccessDeniedPage />,
  },
  {
    path: Url.NOT_FOUND,
    exact: true,
    children: <NotFoundPage />,
  },
];
