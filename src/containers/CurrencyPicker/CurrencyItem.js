import React, { PropTypes } from 'react';

import StyledItem from './StyledItem';

const CurrencyItem = ({item, selected, onClick }) => {
  if(selected) {
    return (
      <StyledItem selected>{item}</StyledItem>
    );
  }
  return <StyledItem onClick={() => onClick(item)}>{item}</StyledItem>;
};

CurrencyItem.propTypes = {
  item: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default CurrencyItem;
