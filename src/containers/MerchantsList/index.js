import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadMerchantsListSend } from '../App/actions';
import { selectMerchantsList } from './selectors';

export class MerchantsListContainer extends Component {
  componentWillMount() {
    this.props.handleLoadMerchantsListSend();
  }

  render() {
    const {
      merchants,
    } = this.props;

    return (
      <main className='merchants-list'>
        { merchants.map(m => <img key={ m.id } src={ m.avatarUrl } alt=""/>) }
      </main>
    );
  }
}

MerchantsListContainer.propTypes = {
  handleLoadMerchantsListSend: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  merchants: selectMerchantsList(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleLoadMerchantsListSend: () => {
      dispatch(loadMerchantsListSend());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantsListContainer);
