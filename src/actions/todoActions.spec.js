/* eslint-env jest */

import * as constants from '../constants/todoConstants';
import { addTodoAction, toggleTodoAction } from './todoActions';

describe('Actions', () => {
  describe('addTodoAction', () => {
    it('should return an `add todo` action object', () => {
      const text = 'Hello, world!';
      const action = {
        type: constants.ADD_TODO,
        text,
        id: 0,
      };

      expect(
        addTodoAction(text)
      ).toEqual(action);
    });
  });

  describe('toggleTodoAction', () => {
    it('should return a `toggle todo` action object', () => {
      const id = 0;
      const action = {
        type: constants.TOGGLE_TODO,
        id,
      };

      expect(
        toggleTodoAction(id)
      ).toEqual(action);
    });
  });
});
