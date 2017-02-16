import React, { PropTypes } from 'react';

import DetailsList from './DetailsList';
import Message from './Message';
import DetailedCurrencyItem from './DetailedCurrencyItem';

const CurrencyDetails = ({selectedCurrencies}) => {
  let content = (<Message>There are no selected currencies yet.</Message>);

  if(selectedCurrencies) {
    content = (<DetailedCurrencyItem />);
  }

  return (
    <DetailsList>
      {content}
    </DetailsList>
  );
};

CurrencyDetails.propTypes = {
  selectedCurrencies: PropTypes.array
};

export default CurrencyDetails;
