/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Filter from './Filter';

describe('<Filter />', () => {
  it('should render a list', () => {
    const wrapper = shallow(<Filter />);

    expect(
      wrapper.find('ul').length
    ).to.be.above(0);
  });
});
