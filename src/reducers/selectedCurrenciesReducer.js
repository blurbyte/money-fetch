import initialState from './initialState';
// import * as types from '../actions/actionTypes';

const selectedCurrenciesReducer = (state = initialState.selectedCurrencies, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default selectedCurrenciesReducer;
