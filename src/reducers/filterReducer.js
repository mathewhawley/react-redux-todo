import { SET_FILTER, FILTERS } from '../constants/filterConstants';
import { createReducer } from '../utils';

const INITIAL_STATE = FILTERS.SHOW_ALL;

const setFilter = (state, action) => action.filter;

export const filterReducer = createReducer(INITIAL_STATE, {
  [SET_FILTER]: setFilter,
});
