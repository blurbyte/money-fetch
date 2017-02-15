//Root reducer setup
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currencies from './currenciesReducer';

const rootReducer = combineReducers({ currencies, routing: routerReducer });

export default rootReducer;

