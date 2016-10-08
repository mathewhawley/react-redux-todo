/* eslint-env mocha */

import { expect } from 'chai';
import { FILTERS, SET_FILTER } from '../constants/filterConstants';
import { setFilterAction } from './filterActions';

describe('filterAction', () => {
  it('should return a `set filter` action object', () => {
    const filter = FILTERS.SHOW_ALL;
    const action = {
      type: SET_FILTER,
      filter,
    };

    expect(
      setFilterAction(filter)
    ).to.deep.equal(action);
  });
});
