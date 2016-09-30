import * as constants from '../constants/filterConstants';

export const setFilterAction = (filter) => {
  return {
    type: constants.SET_FILTER,
    filter,
  };
};
