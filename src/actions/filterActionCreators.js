import * as constants from '../constants/filterConstants';

export const setFilter = (filter) => {
  return {
    type: constants.SET_FILTER,
    filter,
  };
};
