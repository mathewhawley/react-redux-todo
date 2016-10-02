/* eslint-env mocha */

import { expect } from 'chai';
import { v4 } from 'node-uuid';
import * as constants from '../constants/todoConstants';
import {
  addTodoAction,
  deleteTodoAction,
  toggleTodoAction,
} from './todoActions';

describe('addTodoAction', () => {
  it('should return an `add todo` action object', () => {
    const text = 'Hello, world!';
    const action = {
      type: constants.ADD_TODO,
      text,
      id: v4(),
    };
    const returnedAction = addTodoAction(text);

    expect(
      returnedAction.type
    ).to.be.equal(constants.ADD_TODO);

    expect(
      returnedAction.text
    ).to.be.equal(text);

    expect(
      Object.keys(returnedAction)
    ).to.have.members(Object.keys(action));
  });
});

describe('deleteTodoAction', () => {
  it('should return a `delete todo` action object', () => {
    const id = v4();
    const action = {
      type: constants.DELETE_TODO,
      id,
    };

    expect(
      deleteTodoAction(id)
    ).to.deep.equal(action);
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
