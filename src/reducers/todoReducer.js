import * as constants from '../constants/todoConstants';
import { updateObject, updateObjectInArray } from '../utils/generalUtils';

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

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return addTodo(state, action);
    case constants.TOGGLE_TODO:
      return toggleTodo(state, action);
    default:
      return state;
  }
};
