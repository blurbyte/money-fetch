import { fetchCurrencies, fetchCurrenciesFromServer } from '../currenciesSagas';
import { call, put } from 'redux-saga/effects';

describe('fetchCurrencies saga', () => {
  const saga = fetchCurrencies();
  let output = null;

  it('should call fetchCurrenciesFromServer', function (done) {
    output = saga.next().value;
    let expected = call(fetchCurrenciesFromServer);
    done();

    expect(output).toEqual(expected);
  });
  it('should put REQUEST_CURRENCIES_SUCCESS', function (done) {
    const currencies = [
      {
        curency: 'dolar',
        code: 'USD',
        mid: 4.01
      },
      {
        curency: 'euro',
        code: 'EUR',
        mid: 4.32
      },
      {
        curency: 'forint',
        code: 'HUF',
        mid: 0.013
      }
    ];

    output = saga.next(currencies).value;
    let expected = put({ type: 'REQUEST_CURRENCIES_SUCCESS', currencies });
    const finished = saga.next().done;
    done();

    expect(finished).toEqual(true);
    expect(output).toEqual(expected);
  });
});
