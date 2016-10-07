import { v4 } from 'node-uuid';
import * as constants from '../constants/todoConstants';

export const addTodoAction = (text) => ({
  type: constants.ADD_TODO,
  text,
  id: v4(),
  createdAt: Date.now(),
});

export const deleteTodoAction = (id) => ({
  type: constants.DELETE_TODO,
  id,
});

export const toggleTodoAction = (id) => ({
  type: constants.TOGGLE_TODO,
  id,
});
