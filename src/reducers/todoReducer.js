import { ADD_TODO } from '../constants/todoConstants';

const INITIAL_STATE = [];

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false,
        },
      ];
    default:
      return state;
  }
};
