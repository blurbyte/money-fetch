import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { requestCurrencies } from '../../actions/currenciesActions';

import currencyPickerSelector from '../../selectors/currencyPickerSelector';

import CurrenciesList from './CurrenciesList';
import CurrencyItem from './CurrencyItem';
import Headline from '../../components/Headline';
import Wrapper from './Wrapper';

class CurrencyPicker extends React.Component {
  componentWillMount() {
    this.props.requestCurrencies();
  }

  render() {
    let content = (<div></div>);

    if (this.props.currencies) {
      content = this.props.currencies.map(item => (<CurrencyItem key={item}>{item}</CurrencyItem>));
    }

    return (
      <Wrapper>
        <Headline>Select currency</Headline>
        <CurrenciesList>
          {content}
        </CurrenciesList>
      </Wrapper>
    );
  }
}

CurrencyPicker.propTypes = {
  currencies: PropTypes.array,
  requestCurrencies: PropTypes.func
};

const mapStateToProps = (state) => (
  {
    currencies: currencyPickerSelector(state.currencies)
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    requestCurrencies: () => dispatch(requestCurrencies())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPicker);
