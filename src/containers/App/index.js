import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';

import LoadingIndicator from '../../components/LoadingIndicator';
import { selectShowLoader } from './selectors';
import logo from '../../logo.png';
import './style.scss';

export class AppComponent extends Component {
  render() {
    const { showLoader, children } = this.props;

    return (
      <Fragment>
        { showLoader && <LoadingIndicator/> }
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome</h2>
          </div>
          { children }
        </div>
      </Fragment>
    );
  }
}

AppComponent.propTypes = {
  children: PropTypes.node,
  showLoader: PropTypes.bool,
};

AppComponent.defaultProps = {
  children: [],
  showLoader: false,
};

const mapStateToProps = createStructuredSelector({
  showLoader: selectShowLoader(),
});

export default connect(mapStateToProps)(AppComponent);
