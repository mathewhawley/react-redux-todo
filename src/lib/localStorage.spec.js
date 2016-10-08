/* eslint-env mocha */
/* eslint no-empty-function: 0 */

import { expect } from 'chai';
import sinon from 'sinon';
import { loadState, saveState } from './localStorage';

const mockStorage = (overrides) => ({
  storage: {
    state: null,
  },
  setItem() {},
  removeItem() {},
  key() {},
  getItem() {},
  length: 0,
  ...overrides,
});

describe('localStorage', () => {
  describe('loadState', () => {
    beforeEach(() => {
      global.window = { localStorage: mockStorage() };
    });

    it('should call `getItem` with `state`', () => {
      const spy = sinon.spy(window.localStorage, 'getItem');

      loadState();

      expect(
        spy.calledWith('state')
      ).to.be.true;
    });
  });

  describe('saveState', () => {
    beforeEach(() => {
      global.window = { localStorage: mockStorage() };
    });

    it('should call `setItem` with `state` and `serialized` state object', () => {
      const spy = sinon.spy(window.localStorage, 'setItem');
      const state = {
        todos: [],
      };
      const serializedState = JSON.stringify(state);

      saveState(state);

      expect(
        spy.calledWith('state', serializedState)
      ).to.be.true;
    });
  });
});
