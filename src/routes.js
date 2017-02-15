//Application routes declarations
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import CurrencyPanel from './containers/CurrencyPanel';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CurrencyPanel} />
  </Route>
);
