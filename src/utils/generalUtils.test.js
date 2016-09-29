/* eslint-env jest */

import { updateObject } from './generalUtils';

describe('Utils : updateObject', () => {
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
