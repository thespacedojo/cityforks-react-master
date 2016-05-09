import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from '/imports/client/containers/App.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ Places } />
      <Route path="/map" component={ Map } />
    </Route>
  </Router>
);
