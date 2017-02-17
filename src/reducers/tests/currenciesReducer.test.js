import * as actions from '../../actions/currenciesActions';
import currenciesReducer from '../currenciesReducer';

// reducer integration test
describe('currencies reducer', () => {
  it('should populate store when data got fetched', () => {

    // arrange
    const stateBefore = {};
    //also got passed to action creator
    const stateAfter = {
      'USD': {
        curency: 'dolar',
        code: 'USD',
        mid: 4.01
      },
      'EUR': {
        curency: 'euro',
        code: 'EUR',
        mid: 4.32
      },
      'HUF': {
        curency: 'forint',
        code: 'HUF',
        mid: 0.013
      },
    };

    // act
    const action = actions.requestCurrenciesSuccess(stateAfter);

    Object.freeze(stateBefore);
    Object.freeze(action);

    // assert
    expect(currenciesReducer(stateBefore, action)).toEqual(stateAfter);
  });
});
