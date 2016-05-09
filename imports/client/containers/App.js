import React from 'react';
import Tracker from 'tracker-component';
import { IndexLink, Link } from 'react-router';

class AppContainer extends Tracker.Component {
  constructor() {
    super();
    this.autorun(() => {
      const currentLocation = Geolocation.latLng() || { lat: 0, lng: 0 };
      this.setState({currentLocation});
    });
  }
  render() {
    return (
      <div>
        <header className="bar bar-nav">
          <h1 className="title">CityForks</h1>
        </header>
        {React.cloneElement(this.props.children, {loc: this.state.currentLocation})}
        <nav className="bar bar-footer bar-tab">
          <Link className="tab-item" activeClassName="active" to="/">
            <span className="icon icon-home"></span>
            <span className="tab-label">Home</span>
          </Link>
          <Link className="tab-item" activeClassName="active" to="/map">
            <span className="icon icon-search"></span>
            <span className="tab-label">Map</span>
          </Link>
        </nav>
      </div>
    )
  }
} 

export default AppContainer;
