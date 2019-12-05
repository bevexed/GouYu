import React, { Suspense } from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AppRoutes } from "./router";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={ store }>
        <HashRouter>
          <Switch>
            <Suspense fallback={ <div>加载中。。。</div> }>
              { AppRoutes.map(item => (
                <Route { ...item }/>
              )) }
            </Suspense>
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
};

export default App;
