import * as actions from '../../actions/selectedCurrenciesActions';
import selectedCurrenciesReducer from '../selectedCurrenciesReducer';

// reducer integration test
describe('currencies reducer', () => {
  it('should add selected currency to store', () => {

    // arrange
    const stateBefore = ['USD', 'EUR', 'HUF'];
    const stateAfter = ['USD', 'EUR', 'HUF', 'AUD'];

    // act
    const action = actions.selectCurrency('AUD');

    Object.freeze(stateBefore);
    Object.freeze(action);

    // assert
    expect(selectedCurrenciesReducer(stateBefore, action)).toEqual(stateAfter);
  });
  it('should not add currency to store if it already exists', () => {

    // in case of multiple button clicks, etc.
    // arrange
    const stateBefore = ['USD', 'EUR', 'HUF'];
    const stateAfter = ['USD', 'EUR', 'HUF'];

    // act
    const action = actions.selectCurrency('USD');

    Object.freeze(stateBefore);
    Object.freeze(action);

    // assert
    expect(selectedCurrenciesReducer(stateBefore, action)).toEqual(stateAfter);
  });
  it('should remove selected currency from store', () => {

    // arrange
    const stateBefore = ['USD', 'EUR', 'HUF'];
    const stateAfter = ['USD', 'HUF'];

    // act
    const action = actions.removeSelectedCurrency('EUR');

    Object.freeze(stateBefore);
    Object.freeze(action);

    // assert
    expect(selectedCurrenciesReducer(stateBefore, action)).toEqual(stateAfter);
  });
});
