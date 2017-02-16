import initialState from './initialState';
import * as types from '../actions/actionTypes';

import contains from 'ramda/src/contains';

const selectedCurrenciesReducer = (state = initialState.selectedCurrencies, action) => {
  switch(action.type) {
    case types.SELECT_CURRENCY:
      // checks if code already exists in selectedCurrencies
      return contains(action.code, state) ? state : state.concat(action.code);
    default:
      return state;
  }
};

export default selectedCurrenciesReducer;
