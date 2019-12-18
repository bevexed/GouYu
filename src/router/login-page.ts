import { lazy } from 'react';
import { RouteType } from './index';

export const LoginPage: RouteType[] = [
  {
    path: '/login',
    component: lazy(() => import('../containers/login-page/login-page')),
    exact: true,
  },
  {
    path: '/complete-information',
    component: lazy(() =>
      import('../containers/login-page/complete-information-page'),
    ),
    exact: true,
  },
  {
    path: '/bind-phone',
    component: lazy(() => import('../containers/login-page/bind-phone-page')),
    exact: true,
  },
  {
    path: '/user-agreement',
    component: lazy(() => import('../containers/login-page/user-agreement-page')),
    exact: true,
  }
];
