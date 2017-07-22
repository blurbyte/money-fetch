// required for redux-saga generatos
import 'regenerator-runtime/runtime';

/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import createCompressor from 'redux-persist-transform-compress';


import App from './containers/App';

// styles reset
import 'sanitize.css/sanitize.css';

// redux store
import configureStore from './store';

// es6 promises polyfill
import Promise from 'promise-polyfill';

if (!window.Promise) {
  window.Promise = Promise;
}

// load favicon & manifest.json
import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json'; // eslint-disable-line import/extensions

// custom global styles
import './styles/globalStyles';

const initialState = {};
const store = configureStore(initialState);


// persisting the store with compression
const compressor = createCompressor({ whitelist: ['currencies'] });
persistStore(store, { transforms: [compressor] });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// install ServiceWorker
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
