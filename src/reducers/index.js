//Root reducer setup
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currencies from './currenciesReducer';
import selectedCurrencies from './selectedCurrenciesReducer';

const rootReducer = combineReducers({ currencies, selectedCurrencies, routing: routerReducer });

export default rootReducer;

