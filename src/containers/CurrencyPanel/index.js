import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { requestCurrencies } from '../../actions/currenciesActions';

import currencyPanelSelector from '../../selectors/currencyPanelSelector';

// components
import CurrencyPicker from '../../components/CurrencyPicker';
import CurrencyDetails from '../../components/CurrencyDetails';
import Headline from './Headline';
import Wrapper from './Wrapper';
import Section from '../../components/Section';

class CurrencyPanel extends React.Component {
  componentWillMount() {
    this.props.requestCurrencies();
  }

  render() {
    return (
      <Wrapper>
        <Section>
          <Headline>Select currency</Headline>
          <CurrencyPicker currencies={this.props.currencies} />
        </Section>
        <Section>
          <Headline vivid>Currency details</Headline>
          <CurrencyDetails />
        </Section>
      </Wrapper>
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
