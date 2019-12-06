import React, { lazy, LazyExoticComponent, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

export interface RouteType {
  path: string;
  component: LazyExoticComponent<any>;
  exact: boolean;
  title?: string;
  icon?: string;
  children?: RouteType[];
}

const AppRoutes: RouteType[] = [
  {
    path: '/login',
    component: lazy(() => import('../containers/login')),
    exact: true,
  },
  {
    path: '/complete-information',
    component: lazy(() => import('../containers/complete-information')),
    exact: true
  }
];

export const MapRouters: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Suspense fallback={ <div>加载中。。。</div> }>
          { AppRoutes.map((item, key) => (
            <Route { ...item } key={ key }/>
          )) }
        </Suspense>
      </Switch>
    </HashRouter>
  );
};
