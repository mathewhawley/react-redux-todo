import * as constants from '../constants/filterConstants';
import { createReducer } from '../utils';

const INITIAL_STATE = 'SHOW_ALL';

const setFilter = (state, action) => {
  return action.filter;
};

export const filterReducer = createReducer(INITIAL_STATE, {
  [constants.SET_FILTER]: setFilter,
});
