import initialState from './initialState';
import * as types from '../actions/actionTypes';

const currenciesReducer = (state = initialState.currencies, action) => {
  switch(action.type) {
    case types.REQUEST_CURRENCIES_SUCCESS:
      return action.currencies;
    default:
      return state;
  }
};

export default currenciesReducer;
