/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('<App />', () => {
  it('should render some child elements', () => {
    const wrapper = shallow(<App />);

    expect(
      wrapper.children().length
    ).to.be.above(0);
  });
});
