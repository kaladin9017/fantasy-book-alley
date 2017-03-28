import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import categoryReducer from './categoryReducer';
import libraryReducer from './libraryReducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  library: libraryReducer,
  router: routerReducer
});

export default rootReducer;
