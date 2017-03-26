import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import store from './redux/store/configureStore';

import App from './App';
import RouteConfig from './RouteConfig';

import "semantic-ui-css/semantic.css";

ReactDOM.render(
  <Provider store={store}>
    <RouteConfig />
</Provider>,
  document.getElementById('root')
);
