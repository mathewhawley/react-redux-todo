/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Filter from './Filter';

describe('<Filter />', () => {
  it('should render a list of filters', () => {
    const wrapper = shallow(<Filter />);

    expect(
      wrapper.find('ul').children().length
    ).to.be.above(0);
  });
});
