import React, { lazy, LazyExoticComponent, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { LoginPage } from './login-page';
import { ShopPage } from "./shop-page";
import { SearchPage } from "./search-page";
import { PrizePage } from "./prize-page";
import { HealthPage } from "./health-page";
import { ComunityPage } from './comuntity-page';
import { NearfinedPage } from './nearfined-page';
import { QuestionPage } from './question-page';
import { MayQuestionPage } from './mayquestion-page';
import { RemindPage } from './remind-page';
import { GoodPage } from "./good-page";

export interface RouteType {
  path: string;
  component: LazyExoticComponent<any>;
  exact: boolean;
  title?: string;
  icon?: string;
  children?: RouteType[];
}

const AppRoutes: RouteType[] = [
  ...LoginPage,
  ...ShopPage,
  ...SearchPage,
  ...PrizePage,
  ...HealthPage,
  ...ComunityPage,
  ...NearfinedPage,
  ...QuestionPage,
  ...MayQuestionPage,
  ...RemindPage,
  ...GoodPage,
  {
    path: '/',
    component: lazy(() => import('../containers/login-page/login-index')),
    exact: true,
  },
];

export const MapRouters: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Suspense fallback={<div>加载中。。。</div>}>
          {AppRoutes.map((item, key) => (
            <Route {...item} key={key} />
          ))}
          <Route component={lazy(()=>import('../components/example'))}/>
        </Suspense>
      </Switch>
    </HashRouter>
  );
};
