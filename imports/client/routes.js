import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import AppContainer from '/imports/client/containers/App.js';
import Places from '/imports/client/components/places.js'
import Map from '/imports/client/components/Map.js'

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ Places } />
      <Route path="/map" component={ Map } />
    </Route>
  </Router>
);
