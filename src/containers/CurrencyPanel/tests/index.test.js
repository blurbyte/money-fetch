import React from 'react';
import { shallow } from 'enzyme';

import CurrencyPanel from '../index';
import CurrencyPicker from '../../CurrencyPicker';
import CurrencyDetails from '../../CurrencyDetails';

describe('<CurrencyPanel />', () => {
  it('should contain <CurrencyPicker />', () => {
    const component = shallow(<CurrencyPanel />);
    expect(component.find(CurrencyPicker).length).toEqual(1);
  });
  it('should contain <CurrencyDetails />', () => {
    const component = shallow(<CurrencyPanel />);
    expect(component.find(CurrencyDetails).length).toEqual(1);
  });
});
