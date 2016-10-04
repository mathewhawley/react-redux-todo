/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render a <header>', () => {
    expect(
      wrapper.find('header')
    ).to.exist;
  });

  it('should render a <main>', () => {
    expect(
      wrapper.find('main')
    ).to.exist;
  });
});
