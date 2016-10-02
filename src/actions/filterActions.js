import * as constants from '../constants/filterConstants';

export const setFilterAction = (filter) => ({
  type: constants.SET_FILTER,
  filter,
});
