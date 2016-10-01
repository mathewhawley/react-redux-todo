/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TodoList from './TodoList';

let id = 0;
const mockTodo = (overrides) => {
  return {
    text: 'Hello, world',
    id: id++,
    completed: false,
    ...overrides,
  };
};

describe('<TodoList />', () => {
  it('renders the list of todos', () => {
    const todos = [mockTodo(), mockTodo(), mockTodo()];
    const wrapper = shallow(<TodoList todos={todos} />);

    expect(
      wrapper.find('ul').children()
    ).to.have.length(todos.length);
  });
});
