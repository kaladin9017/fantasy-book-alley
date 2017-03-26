import React from 'react';
import RouteWithSubRoute from '../common/RouteWithSubRoute';

const Library = ({ routes }) => (
  <div>
    Library

    {routes.map((route, i) => (
      <RouteWithSubRoute key={i} {...route}/>
    ))}
  </div>
)
export default Library;
