/* eslint-env jest */

import { ADD_TODO } from '../constants/todoConstants';
import { todoReducer } from './todoReducer';

describe('Reducer : Todo', () => {
  it('should return the current state when the action is unknown', () => {
    const stateBefore = [
      {
        text: 'Hello, world!',
        id: 0,
        completed: false,
      },
    ];
    const action = {
      type: 'UNKNOWN_ACTION',
      text: 'Go shopping',
      id: 1,
    };

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(
      todoReducer(stateBefore, action)
    ).toEqual(stateBefore);
  });

  it('should update the state with a new todo', () => {
    const stateBefore = [];
    const action = {
      type: ADD_TODO,
      text: 'Hello, world!',
      id: 0,
    };
    const stateAfter = [
      {
        text: 'Hello, world!',
        id: 0,
        completed: false,
      },
    ];

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(
      todoReducer(stateBefore, action)
    ).toEqual(stateAfter);
  });
});
