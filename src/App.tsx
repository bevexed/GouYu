import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { MapRouters } from './router';
import './App.less';
import 'lib-flexible';
import 'reset-css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={ store }>
        <MapRouters/>
      </Provider>
    </div>
  );
};

export default App;
