import React from 'react';
import Tracker from 'tracker-component';
import { IndexLink, Link } from 'react-router';

const AppContainer = ({children}) => (
  <div>
    <header className="bar bar-nav">
      <h1 className="title">CityForks</h1>
    </header>
    {children}
    <nav className="bar bar-footer bar-tab">
      <Link className="tab-item" activeClassName="active" to="/">
        <span className="icon icon-home"></span>
        <span className="tab-label">Home</span>
      </Link>
    </nav>
  </div>
); 

export default AppContainer;
