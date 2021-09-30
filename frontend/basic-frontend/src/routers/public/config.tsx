import { RouteConfig } from "..";
import { Url } from "../../constants";
import { AccessDeniedPage, LoginPage, NotFoundPage } from "../../pages";

export const publicRouteConfig: RouteConfig[] = [
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
