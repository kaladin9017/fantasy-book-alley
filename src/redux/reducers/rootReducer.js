import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import categoryReducer from './categoryReducer';
import libraryReducer from './libraryReducer';
import featuredBookReducer from './featuredBookReducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  library: libraryReducer,
  router: routerReducer,
  featured: featuredBookReducer
});

export default rootReducer;
