import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//
import App from './App';
import Library from './components/library/Library';
import CategoryPage from './components/category/CategoryPage';
import SearchPage from './components/search/SearchPage';
import BookPage from './components/books/BookPage';
//

// Navigation
import NavBar from './components/navigation/NavBar';
import FooterBar from './components/navigation/FooterBar';
//

const routes = [
  { path: '/',
    component: App,
    routes: [
      { path: '/category/:category',
        component: CategoryPage
      }
    ]
  },
  { path: '/library',
    component: Library,
    routes: [
      { path: '/library/:book',
        component: BookPage
      }
    ]
  },
  { path: '/search',
    component: SearchPage,
    routes: [
      { path: '/search/:book',
        component: BookPage
      }
    ]
  }
]

const RouteWithSubRoutes = (route) => (
  <Route exact path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)


const RouteConfig = () => (
  <Router>
    <div>
      <NavBar/>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
      <FooterBar/>
    </div>
  </Router>
)

export default RouteConfig;
