import * as types from '../actions/actionTypes';
import { takeLatest, call, put, fork } from 'redux-saga/effects';

import { requestCurrenciesSuccess, requestCurrenciesFail } from '../actions/currenciesActions';

//helper functions
import { toMapByCode } from '../utilities/toMap';

const apiEndpoint = 'http://api.nbp.pl/api/exchangerates/tables/A/?format=json';

// general purpose fetching function
export function fetchCurrenciesFromServer() {
  return fetch(apiEndpoint)
    .then(response => response.json())
    //format currencies list
    .then(json => toMapByCode(json[0].rates));
}

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
