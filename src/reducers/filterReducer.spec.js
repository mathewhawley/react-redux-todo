/* eslint-env mocha */

import { expect } from 'chai';
import { SET_FILTER, FILTERS } from '../constants/filterConstants';
import { filterReducer } from './filterReducer';

describe('filterReducer', () => {
  const stateBefore = FILTERS.SHOW_ALL;

  it('should return the current state when the action is unrecognised', () => {
    const action = {
      type: 'UNRECOGNISED_ACTION',
      filter: FILTERS.SHOW_ACTIVE,
    };

    Object.freeze(action);

    expect(
      filterReducer(stateBefore, action)
    ).to.deep.equal(stateBefore);
  });

  it('should update the state with a new filter', () => {
    const action = {
      type: SET_FILTER,
      filter: FILTERS.SHOW_COMPLETED,
    };
    const stateAfter = FILTERS.SHOW_COMPLETED;

    Object.freeze(action);

    expect(
      filterReducer(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });
});
