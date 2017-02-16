import React, { PropTypes } from 'react';
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

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillMount() {
    this.props.requestCurrencies();
  }

  handleItemClick(item) {
    this.props.selectCurrency(item);
  }

  render() {
    let content = (<div></div>);

    if (this.props.currencies) {
      content = this.props.currencies.map(item =>
        (<CurrencyItem
          onClick={this.handleItemClick}
          item={item}
          key={item}
          selected={contains(item, this.props.selectedCurrencies)}
        />));
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
