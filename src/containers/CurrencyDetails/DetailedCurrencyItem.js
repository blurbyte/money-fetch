import React, { PropTypes } from 'react';

import StyledCurrencyItem from './StyledCurrencyItem';
import TextLine from './TextLine';
import CloseButton from './CloseButton';

const DetailedCurrencyItem = ({details, handleItemRemove}) => {
  return (
    <StyledCurrencyItem>
      <CloseButton onClick={() => handleItemRemove(details.code)} />
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
  }),
  handleItemRemove: PropTypes.func
};

export default DetailedCurrencyItem;
