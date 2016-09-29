import * as constants from '../constants/todoConstants';
import { updateObject, updateObjectInArray } from '../utils/generalUtils';

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
      return updateObjectInArray(state, action.id, (item) => {
        return updateObject(item, { completed: !item.completed });
      });
    default:
      return state;
  }
};
