import * as constants from '../constants/todoConstants';

import {
  updateObject,
  updateObjectInArray,
  createReducer,
} from '../utils/generalUtils';

const INITIAL_STATE = [];

const addTodo = (state, action) => {
  return [
    ...state,
    {
      text: action.text,
      id: action.id,
      completed: false,
    },
  ];
};

const toggleTodo = (state, action) => {
  return updateObjectInArray(state, action.id, (item) => {
    return updateObject(item, { completed: !item.completed });
  });
};

export const todoReducer = createReducer(INITIAL_STATE, {
  [constants.ADD_TODO]: addTodo,
  [constants.TOGGLE_TODO]: toggleTodo,
});
