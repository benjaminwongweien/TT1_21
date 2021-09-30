import { RouteConfig } from "..";
import { Url } from "../../constants";
import { HomePage } from "../../pages";
import { ChartsPage } from "../../pages/ChartsPage";

export const privateRouteConfig: RouteConfig[] = [
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
];
