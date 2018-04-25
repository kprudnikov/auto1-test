import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {createStructuredSelector} from "reselect";
import { connect } from 'react-redux';

import logo from '../../logo.png';
import './style.scss';

export class AppComponent extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome</h2>
          </div>

        </div>
      </Fragment>
    );
  }
}

AppComponent.propTypes = {
  children: PropTypes.node,
  showLoader: PropTypes.bool.isRequired,
};

AppComponent.defaultProps = {
  children: [],
};

const mapStateToProps = createStructuredSelector({
  showLoader: () => true,
});

export default connect(mapStateToProps)(AppComponent);
