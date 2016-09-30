import * as constants from '../constants/todoConstants';

let idGen = 0;

export const addTodoAction = (text) => {
  return {
    type: constants.ADD_TODO,
    text,
    id: idGen++,
  };
};

export const toggleTodoAction = (id) => {
  return {
    type: constants.TOGGLE_TODO,
    id,
  };
};
