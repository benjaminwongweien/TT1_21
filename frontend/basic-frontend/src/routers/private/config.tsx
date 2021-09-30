import { RouteConfig } from "..";
import { Url } from "../../constants";
import { ChartsPage, CheckoutPage, HomePage } from "../../pages";

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
  {
    path: Url.CHECKOUT,
    exact: true,
    children: <CheckoutPage />,
  },
];
