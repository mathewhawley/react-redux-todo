import * as constants from '../constants/todoConstants';

const INITIAL_STATE = [];

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false,
        },
      ];
    case constants.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
};
