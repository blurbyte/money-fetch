import React, { PropTypes } from 'react';

import CurrenciesList from './CurrenciesList';
import CurrencyItem from './CurrencyItem';

const CurrencyPicker = ({currencies}) => {
  let content = (<div></div>);
  if (currencies) {
    content = currencies.map(item => (<CurrencyItem key={item}>{item}</CurrencyItem>));
  }

  return (
    <CurrenciesList>
      {content}
    </CurrenciesList>
  );
};

CurrencyPicker.propTypes = {
  currencies: PropTypes.array
};

export default CurrencyPicker;
