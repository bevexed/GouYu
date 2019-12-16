import { lazy } from 'react';
import { RouteType } from './index';

export const ShopPage: RouteType[] = [
  {
    path: '/shop',
    component: lazy(() => import('../containers/shop-page/shop-index')),
    exact: true,
  },
  {
    path: '/shop/second-kill-page',
    component: lazy(() => import('../containers/shop-page/second-kill-page')),
    exact: true,
  },
  {
    path: '/shop/hot-style-page',
    component: lazy(() => import('../containers/shop-page/hot-style-page')),
    exact: true,
  },
  {
    path: '/shop/catalogue-page',
    component: lazy(() => import('../containers/shop-page/catalogue-page')),
    exact: true,
  }, {
    path: '/shop/catalogue-page/catalogue-detail-page/:sortName',
    component: lazy(() => import('../containers/shop-page/catalogue-detail-page')),
    exact: true,
  }
];
