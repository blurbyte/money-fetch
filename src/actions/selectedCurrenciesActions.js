import * as types from './actionTypes';

export function selectCurrency(code) {
  return {
    type: types.SELECT_CURRENCY,
    code
  };
}
