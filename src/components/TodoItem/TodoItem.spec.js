/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import { TodoItem } from './TodoItem';

describe('<TodoItem />', () => {
  describe('Shallow rendering', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<TodoItem />);
    });

    it('should render an <li> element', () => {
      expect(
        wrapper.find('li').length
      ).toBe(1);
    });
  });
});
