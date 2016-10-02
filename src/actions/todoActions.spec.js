/* eslint-env mocha */

import { expect } from 'chai';
import { v4 } from 'node-uuid';
import * as constants from '../constants/todoConstants';
import { addTodoAction, toggleTodoAction } from './todoActions';

describe('addTodoAction', () => {
  it('should return an `add todo` action object', () => {
    const text = 'Hello, world!';
    const action = {
      type: constants.ADD_TODO,
      text,
      id: v4(),
    };

    expect(
      addTodoAction(text).type
    ).to.be.equal(constants.ADD_TODO);

    expect(
      Object.keys(addTodoAction(text))
    ).to.have.members(Object.keys(action));
  });
});

describe('toggleTodoAction', () => {
  it('should return a `toggle todo` action object', () => {
    const id = v4();
    const action = {
      type: constants.TOGGLE_TODO,
      id,
    };

    expect(
      toggleTodoAction(id)
    ).to.deep.equal(action);
  });
});
