/* eslint-env mocha */

import { expect } from 'chai';
import sinon from 'sinon';
import { v4 } from 'node-uuid';
import {
  updateObject,
  updateObjectInArray,
  createReducer,
  createObjectLookup,
} from './index';

describe('Utilities', () => {
  describe('updateObject', () => {
    it('should return a new object instance with updated/added values', () => {
      const id = v4();
      const originalObject = {
        text: 'This is a test',
        updated: false,
        id,
      };
      const newValues = {
        text: 'The text has been updated!',
        updated: true,
      };
      const updatedObject = {
        text: 'The text has been updated!',
        updated: true,
        id,
      };

      Object.freeze(originalObject);

      expect(
        updateObject(originalObject, newValues)
      ).to.deep.equal(updatedObject);
    });
  });

  describe('updateObjectInArray', () => {
    it('should update a specified object`s properties in an array', () => {
      const ids = [v4(), v4(), v4()];
      const stateBefore = [
        {
          id: ids[0],
          text: 'Nulla vitae elit libero, a pharetra augue.',
        },
        {
          id: ids[1],
          text: 'Maecenas faucibus mollis interdum.',
        },
        {
          id: ids[2],
          text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
        },
      ];
      const stateAfter = [
        {
          id: ids[0],
          text: 'Nulla vitae elit libero, a pharetra augue.',
        },
        {
          id: ids[1],
          text: 'Maecenas faucibus mollis interdum.',
        },
        {
          id: ids[2],
          text: 'Cras mattis consectetur purus sit amet fermentum.',
        },
      ];

      Object.freeze(stateBefore);

      expect(
        updateObjectInArray(stateBefore, ids[2], (item) => {
          return updateObject(item, { text: 'Cras mattis consectetur purus sit amet fermentum.' });
        })
      ).to.deep.equal(stateAfter);
    });
  });

  describe('createReducer', () => {
    let spyOne;
    let spyTwo;
    let handlers;

    beforeEach(() => {
      spyOne = sinon.spy();
      spyTwo = sinon.spy();
      handlers = {
        CASE_ONE: spyOne,
        CASE_TWO: spyTwo,
      };
    });

    it('should return a function', () => {
      const sliceReducer = createReducer();
      expect(
        sliceReducer
      ).to.be.instanceof(Function);
    });

    it('should call the correct handler', () => {
      const initialState = [];
      const sliceReducer = createReducer(initialState, handlers);
      const action = {
        type: 'CASE_TWO',
      };

      sliceReducer(undefined, action);

      expect(
        spyOne.calledOnce
      ).to.be.false;

      expect(
        spyTwo.calledOnce
      ).to.be.true;
    });

    it('should return the current state if no action is recognised', () => {
      const initialState = [];
      const sliceReducer = createReducer(initialState, handlers);
      const currentState = [
        {
          text: 'Hello, world!',
          id: v4(),
        },
      ];
      const action = {
        type: 'UNRECOGNISED_CASE',
      };

      sliceReducer(currentState, action);

      expect(
        spyOne.calledOnce
      ).to.be.false;

      expect(
        spyTwo.calledOnce
      ).to.be.false;

      expect(
        sliceReducer(currentState, action)
      ).to.deep.equal(currentState);
    });
  });

  describe('createObjectLookup', () => {
    let spyOne;
    let spyTwo;
    let handlers;

    beforeEach(() => {
      spyOne = sinon.spy();
      spyTwo = sinon.spy();
      handlers = {
        CASE_ONE: spyOne,
        CASE_TWO: spyTwo,
      };
    });

    it('should return a function', () => {
      const lookUp = createObjectLookup();

      expect(
        lookUp
      ).to.be.instanceOf(Function);
    });

    it('should call the correct handler', () => {
      const lookUp = createObjectLookup(handlers);

      lookUp(null, 'CASE_ONE');

      expect(
        spyOne.calledOnce
      ).to.be.true;
    });

    it('should return input data if no handler is matched', () => {
      const data = {
        hello: 'world',
      };
      const lookUp = createObjectLookup(handlers);
      const result = lookUp(data, 'CASE_THREE');

      expect(
        result
      ).to.deep.equal(data);
    });
  });
});
