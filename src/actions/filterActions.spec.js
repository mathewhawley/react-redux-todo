/* eslint-env mocha */

import { expect } from 'chai';
import * as constants from '../constants/filterConstants';
import { setFilterAction } from './filterActions';

describe('filterAction', () => {
  it('should return a `set filter` action object', () => {
    const filter = 'SHOW_ALL';
    const action = {
      type: constants.SET_FILTER,
      filter,
    };

    expect(
      setFilterAction(filter)
    ).to.deep.equal(action);
  });
});
