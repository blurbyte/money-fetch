import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import AppWrapper from './AppWrapper';

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Helmet titleTemplate="%s | MoneyFetch" defaultTitle="MoneyFetch" meta={[{ name: 'description', content: 'Simple currency web app' }]} />
        {this.props.children}
      </AppWrapper>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
