/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Banner } from './Banner';

describe('<Banner />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Banner />);
  });

  it('should have a role of `banner`', () => {
    expect(
      wrapper.props().role
    ).to.equal('banner');
  });

  it('should render the main heading', () => {
    expect(
      wrapper.find('h1')
    ).to.exist;
  });
});
