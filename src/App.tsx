import React, { Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AppRoutes } from './router';
import './App.less';
import 'lib-flexible';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={ store }>
        <HashRouter>
          <Switch>
            <Suspense fallback={ <div>加载中。。。</div> }>
              { AppRoutes.map((item, key) => (
                <Route { ...item } key={ key }/>
              )) }
            </Suspense>
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
};

export default App;
