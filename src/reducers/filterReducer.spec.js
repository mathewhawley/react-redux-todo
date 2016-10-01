/* eslint-env mocha */

import { expect } from 'chai';
import * as constants from '../constants/filterConstants';
import { filterReducer } from './filterReducer';

describe('Reducers', () => {
  describe('filterReducer', () => {
    it('should return the current state when the action is unrecognised', () => {
      const stateBefore = 'SHOW_ALL';
      const action = {
        type: 'UNRECOGNISED_ACTION',
        filter: 'SHOW_ACTIVE',
      };

      Object.freeze(action);

      expect(
        filterReducer(stateBefore, action)
      ).to.deep.equal(stateBefore);
    });

    it('should update the state with a new filter', () => {
      const stateBefore = 'SHOW_ALL';
      const action = {
        type: constants.SET_FILTER,
        filter: 'SHOW_COMPLETED',
      };
      const stateAfter = 'SHOW_COMPLETED';

      Object.freeze(action);

      expect(
        filterReducer(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });
  });
});
