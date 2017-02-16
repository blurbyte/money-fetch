import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Headline from './Headline';

import { requestCurrencies } from '../../actions/currenciesActions';

import currencyPanelSelector from '../../selectors/currencyPanelSelector';

// components
import CurrencyPicker from '../../components/CurrencyPicker';
import CurrencyDetails from '../../components/CurrencyDetails';

class CurrencyPanel extends React.Component {
  componentWillMount() {
    this.props.requestCurrencies();
  }

  render() {
    return (
      <article>
        <Headline>Select currency</Headline>
        <CurrencyPicker currencies={this.props.currencies} />
        <Headline vivid>Currency details</Headline>
        <CurrencyDetails />
      </article>
    );
  }
}

CurrencyPanel.propTypes = {
  currencies: PropTypes.array,
  requestCurrencies: PropTypes.func
};

const mapStateToProps = (state) => (
  {
    currencies: currencyPanelSelector(state.currencies)
  }
);
const mapDispatchToProps = (dispatch) => (
  { requestCurrencies: () => dispatch(requestCurrencies()) }
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPanel);
