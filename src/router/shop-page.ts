import { lazy } from 'react';
import { RouteType } from './index';

export const ShopPage: RouteType[] = [
  {
    path: '/shop',
    component: lazy(() => import('../containers/shop-page/shop-index')),
    exact: true,
  },
];
