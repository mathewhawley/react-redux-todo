/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { v4 } from 'node-uuid';
import { TodoList } from './TodoList';

const mockTodo = (overrides) => ({
  text: 'Hello, world',
  id: v4(),
  completed: false,
  ...overrides,
});

describe('<TodoList />', () => {
  it('renders the list of todos', () => {
    const todos = [mockTodo(), mockTodo(), mockTodo()];
    const wrapper = shallow(<TodoList todos={todos} />);

    expect(
      wrapper.find('ul').children()
    ).to.have.length(todos.length);
  });
});
