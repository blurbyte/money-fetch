import initialState from './initialState';
import * as types from '../actions/actionTypes';

import contains from 'ramda/src/contains';
import without from 'ramda/src/without';

const selectedCurrenciesReducer = (state = initialState.selectedCurrencies, action) => {
  switch(action.type) {
    case types.SELECT_CURRENCY:
      // checks if 3-letter currency code already exists in selectedCurrencies
      return contains(action.code, state) ? state : state.concat(action.code);
    case types.REMOVE_SELECTED_CURRENCY:
      return without(action.code, state);
    default:
      return state;
  }
};

export default selectedCurrenciesReducer;
