import * as types from './actionTypes';

export function requestCurrencies() {
  return {
    type: types.REQUEST_CURRENCIES
  };
}

export function requestCurrenciesSuccess(currencies) {
  return {
    type: types.REQUEST_CURRENCIES_SUCCESS,
    currencies
  };
}

export function requestCurrenciesFail(message) {
  return {
    type: types.REQUEST_CURRENCIES_FAIL,
    message
  };
}
