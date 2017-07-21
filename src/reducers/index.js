// Root reducer setup
import { combineReducers } from 'redux';

import currencies from './currenciesReducer';
import selectedCurrencies from './selectedCurrenciesReducer';

const rootReducer = combineReducers({ currencies, selectedCurrencies });

export default rootReducer;

