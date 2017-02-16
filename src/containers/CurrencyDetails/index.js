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

    if(true) {
      content = (<DetailedCurrencyItem />);
    }

    return (
      <Section>
        <Headline vivid>Currency details</Headline>
        <DetailsList>
          {content}
        </DetailsList>
      </Section>
    );
  }
}

CurrencyDetails.propTypes = {
  currencies: PropTypes.object
};

const mapStateToProps = (state) => (
  {
    currencies: state.currencies
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    dispatch
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDetails);
