import { ADD_TODO } from '../constants/todoConstants';

let idGen = 0;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
    id: idGen++,
  };
};
