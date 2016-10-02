import { v4 } from 'node-uuid';
import * as constants from '../constants/todoConstants';

export const addTodoAction = (text) => ({
  type: constants.ADD_TODO,
  text,
  id: v4(),
});

export const toggleTodoAction = (id) => ({
  type: constants.TOGGLE_TODO,
  id,
});
