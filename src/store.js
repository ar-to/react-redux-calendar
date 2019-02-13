import { combineReducers, createStore } from '../../../Library/Caches/typescript/2.9/node_modules/redux'
import * as reducers from './reducers';

const allReducers = combineReducers(reducers)

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;