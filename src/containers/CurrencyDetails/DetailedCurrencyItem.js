import React, { PropTypes } from 'react';

import StyledCurrencyItem from './StyledCurrencyItem';
import TextLine from './TextLine';

const DetailedCurrencyItem = ({details}) => {
  return (
    <StyledCurrencyItem>
      <TextLine code>{details.code}</TextLine>
      <TextLine name>{details.currency}</TextLine>
      <TextLine exchange>{details.mid}</TextLine>
    </StyledCurrencyItem>
  );
};

DetailedCurrencyItem.propTypes = {
  details: PropTypes.shape({
    currency: PropTypes.string,
    code: PropTypes.string,
    mid: PropTypes.number
  })
};

export default DetailedCurrencyItem;
