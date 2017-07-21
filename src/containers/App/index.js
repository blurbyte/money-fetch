import React from 'react';
import Helmet from 'react-helmet';

import AppWrapper from './AppWrapper';
import Header from '../../components/Header';
import CurrencyPanel from '../CurrencyPanel';

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Helmet titleTemplate="%s | MoneyFetch" defaultTitle="MoneyFetch" meta={[{ name: 'description', content: 'Simple currency web app' }]} />
        <Header />
        <CurrencyPanel />
      </AppWrapper>
    );
  }
}

export default App;
