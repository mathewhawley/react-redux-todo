import * as constants from '../constants/todoConstants';
import {
  updateObject,
  updateObjectInArray,
  createReducer,
} from '../utils';

const INITIAL_STATE = [];

const addTodo = (state, action) => {
  return [
    {
      text: action.text,
      id: action.id,
      completed: false,
    },
    ...state,
  ];
};

const deleteTodo = (state, action) => {
  return state.filter((todo) => {
    if (todo.id !== action.id) {
      return todo;
    }
  });
};

const toggleTodo = (state, action) => {
  return updateObjectInArray(state, action.id, (item) => {
    return updateObject(item, { completed: !item.completed });
  });
};

export const todoReducer = createReducer(INITIAL_STATE, {
  [constants.ADD_TODO]: addTodo,
  [constants.DELETE_TODO]: deleteTodo,
  [constants.TOGGLE_TODO]: toggleTodo,
});
