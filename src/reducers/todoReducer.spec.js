/* eslint-env mocha */

import { expect } from 'chai';
import { v4 } from 'node-uuid';
import * as constants from '../constants/todoConstants';
import { todoReducer } from './todoReducer';

describe('todoReducer', () => {
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

  beforeEach(() => {
    Object.freeze(stateBefore);
  });

  it('should return the current state when the action is unrecognised', () => {
    const action = {
      type: 'UNRECOGNISED_ACTION',
      text: 'Go shopping',
      id: v4(),
    };

    expect(
      todoReducer(stateBefore, action)
    ).to.deep.equal(stateBefore);
  });

  it('should update the state with a new todo', () => {
    const id = v4();
    const action = {
      type: constants.ADD_TODO,
      text: 'Learn unit testing',
      id,
    };
    const stateAfter = [
      {
        text: 'Learn unit testing',
        id,
        completed: false,
      },
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

    expect(
      todoReducer(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });

  it('should delete a specified todo', () => {
    const action = {
      type: constants.DELETE_TODO,
      id: ids[0],
    };
    const stateAfter = [
      {
        text: 'Learn React and Redux',
        id: ids[1],
        completed: false,
      },
    ];

    expect(
      todoReducer(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });

  it('should toggle `completed` field of specified todo', () => {
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

    expect(
      todoReducer(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });
});
