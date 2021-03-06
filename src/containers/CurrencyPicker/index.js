import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contains from 'ramda/src/contains';

import { requestCurrencies } from '../../actions/currenciesActions';
import { selectCurrency } from '../../actions/selectedCurrenciesActions';

import currencyPickerSelector from '../../selectors/currencyPickerSelector';

import CurrenciesList from './CurrenciesList';
import CurrencyItem from './CurrencyItem';
import Headline from '../../components/Headline';
import Wrapper from './Wrapper';

class CurrencyPicker extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemSelect = this.handleItemSelect.bind(this);
  }

  componentWillMount() {
    this.props.requestCurrencies();
  }

  handleItemSelect(code) {
    this.props.selectCurrency(code);
  }

  render() {
    return (
      <Wrapper>
        <Headline>Select currency</Headline>
        <CurrenciesList>{
          this.props.currencies.map(item =>
            <CurrencyItem
              onClick={this.handleItemSelect}
              item={item}
              key={item}
              selected={contains(item, this.props.selectedCurrencies)}
            />)}
        </CurrenciesList>
      </Wrapper>
    );
  }
}

CurrencyPicker.propTypes = {
  currencies: PropTypes.array,
  selectedCurrencies: PropTypes.array,
  requestCurrencies: PropTypes.func,
  selectCurrency: PropTypes.func
};

const mapStateToProps = (state) => (
  {
    currencies: currencyPickerSelector(state.currencies),
    selectedCurrencies: state.selectedCurrencies
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    requestCurrencies: () => dispatch(requestCurrencies()),
    selectCurrency: (code) => dispatch(selectCurrency(code))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPicker);
