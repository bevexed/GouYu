import { lazy } from 'react';
import { RouteType } from './index';

export const GoodPage: RouteType[] = [
  {
    path: '/good-page/:id',
    component: lazy(() => import('../containers/good-page/good-index')),
    exact: true,
  },
  {
    path: '/good-vip-page/:id',
    component: lazy(() => import('../containers/good-page/good-vip-index')),
    exact: true,
  }
];
