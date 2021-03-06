import { lazy } from 'react';
import { RouteType } from './index';

export const ShopPage: RouteType[] = [
  {
    path: '/shop-page',
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
  },
  {
    path: '/shop/catalogue-page/catalogue-detail-page/:sortName',
    component: lazy(() =>
      import('../containers/shop-page/catalogue-page/catalogue-detail-page'),
    ),
    exact: true,
  },
  {
    path: '/shop/web-celebrity-goods-page',
    component: lazy(() =>
      import('../containers/shop-page/web-celebrity-goods-page'),
    ),
    exact: true,
  },
  {
    path: '/shop/shop-car-page',
    component: lazy(() => import('../containers/shop-page/shop-car-page')),
    exact: true,
  },
  {
    path: '/shop/fill-in-order-page',
    component: lazy(() =>
      import('../containers/shop-page/shop-car-page/fill-in-order-page'),
    ),
    exact: true,
  },
  {
    path: '/shop/pay-success-page',
    component: lazy(() =>
      import('../containers/shop-page/shop-car-page/pay-success-page'),
    ),
    exact: true,
  },
  {
    path: '/shop/shop-car/select-consignee-page',
    component: lazy(() =>
      import('../containers/shop-page/shop-car-page/select-consignee-page'),
    ),
    exact: true,
  }, {
    path: '/shop/shop-car/add-consignee-page',
    component: lazy(() =>
      import('../containers/shop-page/shop-car-page/add-consignee-page'),
    ),
    exact: true,
  },
];
