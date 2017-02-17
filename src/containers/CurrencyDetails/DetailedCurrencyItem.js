import React, { PropTypes } from 'react';

import StyledCurrencyItem from './StyledCurrencyItem';
import TextLine from './TextLine';
import CloseButton from '../../components/CloseButton';
import CurrentCurrencyCode from './CurrentCurrencyCode';

const DetailedCurrencyItem = ({details, handleItemRemove}) => {
  // shortening currency name if it is too long
  const CHAR_LIMIT = 24;

  return (
    <StyledCurrencyItem>
      <CloseButton onClick={() => handleItemRemove(details.code)} />
      <TextLine code>{details.code}</TextLine>
      <TextLine name>{details.currency.length < CHAR_LIMIT ? details.currency : `${details.currency.slice(0, CHAR_LIMIT)}...)`}</TextLine>
      <TextLine exchange>
        {details.mid}
        <CurrentCurrencyCode>{'PLN'}</CurrentCurrencyCode>
      </TextLine>
    </StyledCurrencyItem>
  );
};

DetailedCurrencyItem.propTypes = {
  details: PropTypes.shape({
    currency: PropTypes.string,
    code: PropTypes.string,
    mid: PropTypes.number
  }),
  handleItemRemove: PropTypes.func
};

export default DetailedCurrencyItem;
