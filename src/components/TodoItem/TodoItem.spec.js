/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { v4 } from 'node-uuid';
import sinon from 'sinon';
import { TodoItem } from './TodoItem';

const mockTodo = (overrides) => {
  return {
    text: 'Hello, world',
    id: v4(),
    completed: false,
    createdAt: Date.now(),
    ...overrides,
  };
};

describe('<TodoItem />', () => {
  let wrapper;
  let todo;
  let toggleSpy;
  let deleteSpy;

  beforeEach(() => {
    toggleSpy = sinon.spy();
    deleteSpy = sinon.spy();
    todo = mockTodo();
    wrapper = shallow(
      <TodoItem
        {...todo}
        toggleTodo={toggleSpy}
        deleteTodo={deleteSpy}
      />
    );
  });

  it('renders the text of the todo', () => {
    expect(
      wrapper.text()
    ).to.contain(todo.text);
  });

  it('should have a toggle handler', () => {
    wrapper.find('li').simulate('click');

    expect(
      toggleSpy.calledOnce
    ).to.be.true;
  });

  it('should have a delete handler', () => {
    wrapper.find('button').simulate('click');

    expect(
      deleteSpy.calledOnce
    ).to.be.true;
  });
});
