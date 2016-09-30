/* eslint-env jest */

import * as constants from '../constants/filterConstants';
import { setFilter } from './filterActions';

describe('ActionCreators : Filter', () => {
  it('should return a `filter` action object', () => {
    const filter = 'SHOW_ALL';
    const action = {
      type: constants.SET_FILTER,
      filter,
    };

    expect(
      setFilter(filter)
    ).toEqual(action);
  });
});
