/* eslint-env mocha */

import { expect } from 'chai';
import { v4 } from 'node-uuid';
import * as constants from '../constants/todoConstants';
import { todoReducer } from './todoReducer';

describe('todoReducer', () => {
  it('should return the current state when the action is unrecognised', () => {
    const stateBefore = [
      {
        text: 'Hello, world!',
        id: v4(),
        completed: false,
      },
    ];
    const action = {
      type: 'UNRECOGNISED_ACTION',
      text: 'Go shopping',
      id: v4(),
    };

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(
      todoReducer(stateBefore, action)
    ).to.deep.equal(stateBefore);
  });

  it('should update the state with a new todo', () => {
    const id = v4();
    const stateBefore = [];
    const action = {
      type: constants.ADD_TODO,
      text: 'Hello, world!',
      id,
    };
    const stateAfter = [
      {
        text: 'Hello, world!',
        id,
        completed: false,
      },
    ];

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(
      todoReducer(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });

  it('should toggle `completed` field of specified todo', () => {
    const ids = [v4(), v4()];
    const stateBefore = [
      {
        text: 'Hello, world',
        id: ids[0],
        completed: false,
      },
      {
        text: 'Learn React and Redux',
        id: ids[1],
        completed: false,
      },
    ];
    const action = {
      type: constants.TOGGLE_TODO,
      id: ids[1],
    };
    const stateAfter = [
      {
        text: 'Hello, world',
        id: ids[0],
        completed: false,
      },
      {
        text: 'Learn React and Redux',
        id: ids[1],
        completed: true,
      },
    ];

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(
      todoReducer(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });
});
