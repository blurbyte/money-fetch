import React, { PropTypes } from 'react';

import StyledCurrencyItem from './StyledCurrencyItem';
import TextLine from './TextLine';
import CloseButton from '../../components/CloseButton';
import CurrentCurrencyCode from './CurrentCurrencyCode';

const DetailedCurrencyItem = ({code, details, handleItemRemove}) => {
  // shortening currency name if it is too long
  const CHAR_LIMIT = 24;

  return (
    <StyledCurrencyItem>
      <CloseButton onClick={() => handleItemRemove(code)} />
      <TextLine code>{code}</TextLine>
      <TextLine name>{details.currency.length < CHAR_LIMIT ? details.currency : `${details.currency.slice(0, CHAR_LIMIT)}...)`}</TextLine>
      <TextLine exchange>
        {details.exchange}
        <CurrentCurrencyCode>{'PLN'}</CurrentCurrencyCode>
      </TextLine>
    </StyledCurrencyItem>
  );
};

DetailedCurrencyItem.propTypes = {
  code: PropTypes.string,
  details: PropTypes.shape({
    currency: PropTypes.string,
    exchange: PropTypes.number
  }),
  handleItemRemove: PropTypes.func
};

export default DetailedCurrencyItem;
