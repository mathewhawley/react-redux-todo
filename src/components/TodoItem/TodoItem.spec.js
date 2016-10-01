/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { TodoItem } from './TodoItem';

const mockItem = (overrides) => {
  return {
    text: 'Hello, world',
    id: 0,
    completed: false,
    ...overrides,
  };
};

describe('<TodoItem />', () => {
  it('renders the text of the todo', () => {
    const item = mockItem();
    const wrapper = shallow(<TodoItem item={item} />);

    expect(
      wrapper.text()
    ).to.contain(item.text);
  });
});
