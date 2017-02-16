import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Headline from './Headline';

import { requestCurrencies } from '../../actions/currenciesActions';

class CurrencyPanel extends React.Component {
  componentWillMount() {
    this.props.requestCurrencies();
  }

  render() {
    return (
      <article>
        <Headline>Select currency</Headline>
      </article>
    );
  }
}

CurrencyPanel.propTypes = {
  requestCurrencies: PropTypes.func
};

const mapStateToProps = (state) => (
  {
    currencies: state.currencies
  }
);
const mapDispatchToProps = (dispatch) => (
  { requestCurrencies: () => dispatch(requestCurrencies()) }
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPanel);
