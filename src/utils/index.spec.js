/* eslint-env jest */

import {
  updateObject,
  updateObjectInArray,
  createReducer,
} from './index';

describe('General Utilities', () => {
  describe('updateObject', () => {
    it('should return a new object instance with updated/added values', () => {
      const originalObject = {
        text: 'This is a test',
        updated: false,
        id: 0,
      };
      const newValues = {
        text: 'The text has been updated!',
        updated: true,
      };
      const updatedObject = {
        text: 'The text has been updated!',
        updated: true,
        id: 0,
      };

      Object.freeze(originalObject);

      expect(
        updateObject(originalObject, newValues)
      ).toEqual(updatedObject);
    });
  });

  describe('updateObjectInArray', () => {
    it('should update a specified object`s properties in an array', () => {
      const stateBefore = [
        {
          id: 0,
          text: 'Nulla vitae elit libero, a pharetra augue.',
        },
        {
          id: 1,
          text: 'Maecenas faucibus mollis interdum.',
        },
        {
          id: 2,
          text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
        },
      ];
      const id = 2;
      const stateAfter = [
        {
          id: 0,
          text: 'Nulla vitae elit libero, a pharetra augue.',
        },
        {
          id: 1,
          text: 'Maecenas faucibus mollis interdum.',
        },
        {
          id: 2,
          text: 'Cras mattis consectetur purus sit amet fermentum.',
        },
      ];

      Object.freeze(stateBefore);

      expect(
        updateObjectInArray(stateBefore, id, (item) => {
          return updateObject(item, { text: 'Cras mattis consectetur purus sit amet fermentum.' });
        })
      ).toEqual(stateAfter);
    });
  });

  describe('createReducer', () => {
    let initialState;
    let caseReducerOne;
    let caseReducerTwo;
    let handlers;
    let sliceReducer;

    beforeEach(() => {
      initialState = [];
      caseReducerOne = jest.fn();
      caseReducerTwo = jest.fn();
      handlers = {
        CASE_ONE: caseReducerOne,
        CASE_TWO: caseReducerTwo,
      };
      sliceReducer = createReducer(initialState, handlers);
    });

    it('should call the correct handler', () => {
      const action = {
        type: 'CASE_TWO',
      };

      sliceReducer(undefined, action);

      expect(
        caseReducerTwo
      ).toBeCalled();
    });

    it('should return the current state if no action is recognised', () => {
      const currentState = [
        {
          text: 'Hello, world!',
          id: 0,
        },
      ];
      const action = {
        type: 'UNRECOGNISED_CASE',
      };

      sliceReducer(currentState, action);

      expect(
        caseReducerOne
      ).not.toBeCalled();

      expect(
        caseReducerTwo
      ).not.toBeCalled();

      expect(
        sliceReducer(currentState, action)
      ).toEqual(currentState);
    });
  });
});
