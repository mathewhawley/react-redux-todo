/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TodoItem from './TodoItem';

const mockTodo = (overrides) => {
  return {
    text: 'Hello, world',
    id: 0,
    completed: false,
    ...overrides,
  };
};

describe('<TodoItem />', () => {
  it('renders the text of the todo', () => {
    const todo = mockTodo();
    const wrapper = shallow(<TodoItem todo={todo} />);

    expect(
      wrapper.text()
    ).to.contain(todo.text);
  });
});
