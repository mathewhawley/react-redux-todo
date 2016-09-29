/* eslint-env jest */

import { addTodo, toggleTodo } from './todoActionCreators';
import * as constants from '../constants/todoConstants';

describe('ActionCreators : Todo', () => {
  describe('addTodo', () => {
    it('should return an `add todo` action object', () => {
      const text = 'Hello, world!';
      const action = {
        type: constants.ADD_TODO,
        text,
        id: 0,
      };

      expect(
        addTodo(text)
      ).toEqual(action);
    });
  })

  describe('toggleTodo', () => {
    it('should return a `toggle todo` action object', () => {
      const id = 0;
      const action = {
        type: constants.TOGGLE_TODO,
        id,
      };

      expect(
        toggleTodo(id)
      ).toEqual(action);
    });
  });
});
