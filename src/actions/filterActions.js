import { SET_FILTER } from '../constants/filterConstants';

export const setFilterAction = (filter) => ({
  type: SET_FILTER,
  filter,
});
