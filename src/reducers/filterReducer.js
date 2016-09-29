import * as constants from '../constants/filterConstants';

const INITIAL_STATE = 'SHOW_ALL';

export const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};
