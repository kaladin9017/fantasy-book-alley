import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import exampleReducer from './exampleReducer';
// import pageInfoReducer from './pageInfoReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  router: routerReducer
});

export default rootReducer;
