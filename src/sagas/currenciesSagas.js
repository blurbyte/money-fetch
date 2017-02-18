import * as types from '../actions/actionTypes';
import { takeLatest, call, put, fork } from 'redux-saga/effects';

import { requestCurrenciesSuccess, requestCurrenciesFail } from '../actions/currenciesActions';

//helper functions
import { toHashMapByCode } from '../utilities/toMap';

import * as endpoints from '../utilities/apiPaths';

// general purpose fetching function
export function fetchCurrenciesFromServer() {
  return fetch(endpoints.CURRENCY_ENDPOINT)
    .then(response => response.json())
    //format currencies list
    .then(json => toHashMapByCode(json[0].rates));
}

// Fetching currencies

export function* fetchCurrencies() {
  try {
    const currencies = yield call(fetchCurrenciesFromServer);
    yield put(requestCurrenciesSuccess(currencies));
  }
  catch (err) {
    yield put(requestCurrenciesFail(err.message));
  }
}

export function* fetchCurrenciesSaga() {
  yield takeLatest(types.REQUEST_CURRENCIES, fetchCurrencies);
}

export default function* currenciesSagas() {
  yield [
    fork(fetchCurrenciesSaga)
  ];
}
