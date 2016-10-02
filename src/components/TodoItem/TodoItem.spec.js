/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { v4 } from 'node-uuid';
import sinon from 'sinon';
import TodoItem from './TodoItem';

const mockTodo = (overrides) => {
  return {
    text: 'Hello, world',
    id: v4(),
    completed: false,
    ...overrides,
  };
};

describe('<TodoItem />', () => {
  let wrapper;
  let todo;
  let spy;

  beforeEach(() => {
    spy = sinon.spy();
    todo = mockTodo();
    wrapper = shallow(<TodoItem {...todo} handleClick={spy} />);
  });

  it('renders the text of the todo', () => {
    expect(
      wrapper.text()
    ).to.contain(todo.text);
  });

  it('should toggle when clicked', () => {
    wrapper.find('li').simulate('click');

    expect(
      spy.calledOnce
    ).to.be.true;
  });
});
