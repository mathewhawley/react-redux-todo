/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';

import { App } from './App';

describe('<App />', () => {
  describe('Snapshots', () => {
    it('should render as expected', () => {
      const component = renderer.create(<App />);
      const tree = component.toJSON();

      expect(
        tree
      ).toMatchSnapshot();
    });
  });
});
