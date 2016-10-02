/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { FilterLink } from './FilterLink';

describe('<FilterLink />', () => {
  it('should render it`s given text', () => {
    const text = 'Completed';
    const wrapper = shallow(<FilterLink>{text}</FilterLink>);

    expect(
      wrapper.text()
    ).to.contain(text);
  });

  it('should call it`s given handler when clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<FilterLink onClick={spy} />);

    // eslint-disable-next-line no-empty-function
    wrapper.find('a').simulate('click', { preventDefault() {} });

    expect(
      spy.calledOnce
    ).to.be.true;
  });
});