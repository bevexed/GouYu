import { lazy } from 'react';
import { RouteType } from './index';

export const PrizePage: RouteType[] = [
  {
    path: '/prize-page',
    component: lazy(() => import('../containers/prize-page/prize-index')),
    exact: true,
  },
];
