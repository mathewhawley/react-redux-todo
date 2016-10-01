/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import { TodoList } from './TodoList';

describe('<TodoList />', () => {
  describe('Shallow rendering', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<TodoList />);
    });

    it('should render a <ul>', () => {
      expect(
        wrapper.find('ul').length
      ).toBe(1);
    });
  });
});
