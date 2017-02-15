import { fork } from 'redux-saga/effects';

export function* fetchCurrencies() {
  return;
}

export default function* currenciesSagas() {
  yield [
    fork(fetchCurrencies)
  ];
}
