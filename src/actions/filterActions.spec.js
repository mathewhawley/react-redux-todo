/* eslint-env jest */

import * as constants from '../constants/filterConstants';
import { setFilterAction } from './filterActions';

describe('Actions', () => {
  describe('filterAction', () => {
    it('should return a `set filter` action object', () => {
      const filter = 'SHOW_ALL';
      const action = {
        type: constants.SET_FILTER,
        filter,
      };

      expect(
        setFilterAction(filter)
      ).toEqual(action);
    });
  });
});