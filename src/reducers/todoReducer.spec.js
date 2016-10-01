/* eslint-env mocha */

import { expect } from 'chai';
import * as constants from '../constants/todoConstants';
import { todoReducer } from './todoReducer';

describe('Reducers', () => {
  describe('todoReducer', () => {
    it('should return the current state when the action is unrecognised', () => {
      const stateBefore = [
        {
          text: 'Hello, world!',
          id: 0,
          completed: false,
        },
      ];
      const action = {
        type: 'UNRECOGNISED_ACTION',
        text: 'Go shopping',
        id: 1,
      };

      Object.freeze(stateBefore);
      Object.freeze(action);

      expect(
        todoReducer(stateBefore, action)
      ).to.deep.equal(stateBefore);
    });

    it('should update the state with a new todo', () => {
      const stateBefore = [];
      const action = {
        type: constants.ADD_TODO,
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
      ).to.deep.equal(stateAfter);
    });

    it('should toggle `completed` field of specified todo', () => {
      const stateBefore = [
        {
          text: 'Hello, world',
          id: 0,
          completed: false,
        },
        {
          text: 'Learn React and Redux',
          id: 1,
          completed: false,
        },
      ];
      const action = {
        type: constants.TOGGLE_TODO,
        id: 1,
      };
      const stateAfter = [
        {
          text: 'Hello, world',
          id: 0,
          completed: false,
        },
        {
          text: 'Learn React and Redux',
          id: 1,
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
});
