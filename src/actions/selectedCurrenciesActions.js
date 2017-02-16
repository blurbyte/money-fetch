import * as types from './actionTypes';

export function selectCurrency(code) {
  return {
    type: types.SELECT_CURRENCY,
    code
  };
}

export function removeSelectedCurrency(code) {
  return {
    type: types.REMOVE_SELECTED_CURRENCY,
    code
  };
}
