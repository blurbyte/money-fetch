import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import DetailsList from './DetailsList';
import Message from './Message';
import DetailedCurrencyItem from './DetailedCurrencyItem';
import Section from '../../components/Section';
import Headline from '../../components/Headline';

class CurrencyDetails extends React.Component {
  render() {

    let content = (<Message>There are no selected currencies yet.</Message>);

    if (this.props.selectedCurrencies.length) {
      //maps array of currency 3-digit codes
      content = this.props.selectedCurrencies.map(item =>
        (<DetailedCurrencyItem
          key={`detailed-currency-${item}`}
          details={this.props.currencies[item]}
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
  selectedCurrencies: PropTypes.array
};

const mapStateToProps = (state) => (
  {
    currencies: state.currencies,
    selectedCurrencies: state.selectedCurrencies
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    dispatch
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDetails);
