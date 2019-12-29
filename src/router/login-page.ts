import { lazy } from 'react';
import { RouteType } from './index';

export const LoginPage: RouteType[] = [
  {
    path: '/login-page',
    component: lazy(() => import('../containers/login-page/login-index')),
    exact: true,
  },
  {
    path: '/login/complete-information-page',
    component: lazy(() =>
      import('../containers/login-page/complete-information-page'),
    ),
    exact: true,
  },
  {
    path: '/login/bind-phone-page',
    component: lazy(() => import('../containers/login-page/bind-phone-page')),
    exact: true,
  },
  {
    path: '/login/user-agreement-page',
    component: lazy(() => import('../containers/login-page/user-agreement-page')),
    exact: true,
  }
];
