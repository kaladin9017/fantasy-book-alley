import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import categoryReducer from './categoryReducer';
// import pageInfoReducer from './pageInfoReducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  router: routerReducer
});

export default rootReducer;
