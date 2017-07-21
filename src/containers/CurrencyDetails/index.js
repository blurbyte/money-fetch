import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeSelectedCurrency } from '../../actions/selectedCurrenciesActions';

import DetailsList from './DetailsList';
import Message from './Message';
import DetailedCurrencyItem from './DetailedCurrencyItem';
import Section from '../../components/Section';
import Headline from '../../components/Headline';

class CurrencyDetails extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemRemove = this.handleItemRemove.bind(this);
  }

  handleItemRemove(code) {
    this.props.removeSelectedCurrency(code);
  }

  render() {

    let content = (<Message key={0}>There are no selected currencies yet.</Message>);

    if (this.props.selectedCurrencies.length) {
      // maps array of currency 3-letters codes
      content = this.props.selectedCurrencies.map(item =>
        (<DetailedCurrencyItem
          key={`detailed-currency-${item}`}
          code={item}
          details={this.props.currencies[item]}
          handleItemRemove={this.handleItemRemove}
        />));
    }

    return (
      <Section>
        <Headline vivid>Selected currencies details</Headline>
        <DetailsList>
          {content}
        </DetailsList>
      </Section>
    );
  }
}

CurrencyDetails.propTypes = {
  currencies: PropTypes.object,
  selectedCurrencies: PropTypes.array,
  removeSelectedCurrency: PropTypes.func
};

const mapStateToProps = (state) => (
  {
    currencies: state.currencies,
    selectedCurrencies: state.selectedCurrencies
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    removeSelectedCurrency: (code) => dispatch(removeSelectedCurrency(code))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDetails);
