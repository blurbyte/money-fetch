import React, { PropTypes } from 'react';

import StyledItem from './StyledItem';

const CurrencyItem = ({item, selected, onClick }) => {
  return selected ?
    <StyledItem selected>{item}</StyledItem> :
    <StyledItem onClick={() => onClick(item)}>{item}</StyledItem>;
};

CurrencyItem.propTypes = {
  item: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default CurrencyItem;
