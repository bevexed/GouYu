import { lazy, LazyExoticComponent } from "react";

export interface RouteType {
  path: string;
  component: LazyExoticComponent<any>;
  exact: boolean;
  title?: string;
  icon?: string;
  children?: RouteType[];
}

export const AppRoutes: RouteType[] = [
  {
    path: '/login',
    component: lazy(() => import('../containers/login')),
    exact: true
  },
];
