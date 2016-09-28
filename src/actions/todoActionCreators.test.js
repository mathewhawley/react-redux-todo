/* eslint-env jest */

import { addTodo } from './todoActionCreators';
import { ADD_TODO } from '../constants/todoConstants';

describe('ActionCreators : Todo : addTodo', () => {
  it('should return a `add todo` action object', () => {
    const text = 'Hello, world!';
    const action = {
      type: ADD_TODO,
      text,
      id: 0,
    };

    expect(
      addTodo(text)
    ).toEqual(action);
  });
});
