/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { TodoList } from './TodoList';

let id = 0;
const mockItem = (overrides) => {
  return {
    text: 'Hello, world',
    id: id++,
    completed: false,
    ...overrides,
  };
};

describe('<TodoList />', () => {
  it('renders the list of items', () => {
    const items = [mockItem(), mockItem(), mockItem()];
    const wrapper = shallow(<TodoList items={items} />);

    expect(
      wrapper.find('ul').children()
    ).to.have.length(items.length);
  });
});
