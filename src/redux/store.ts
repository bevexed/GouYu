import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { a } from './test/reducer';

const reducers = combineReducers({
  a,
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
