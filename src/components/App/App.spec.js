/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('<App />', () => {
  describe('Shallow Rendering', () => {
    it('should render an <h1>', () => {
      const wrapper = shallow(<App />);

      expect(
        wrapper.find('h1').length
      ).toBe(1);
    });
  });
});
