// one of the root components, then placed in containers
import React from 'react';

// components
import CurrencyPicker from '../CurrencyPicker';
import CurrencyDetails from '../CurrencyDetails';
import Wrapper from './Wrapper';

class CurrencyPanel extends React.Component {
  render() {
    return (
      <Wrapper>
        <CurrencyPicker />
        <CurrencyDetails />
      </Wrapper>
    );
  }
}

export default CurrencyPanel;
