/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { FilterButton } from './FilterButton';

describe('<FilterButton />', () => {
  it('should render it`s given text', () => {
    const text = 'Completed';
    const wrapper = shallow(<FilterButton>{text}</FilterButton>);

    expect(
      wrapper.text()
    ).to.contain(text);
  });

  it('should call it`s given handler when clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<FilterButton setFilter={spy} />);

    wrapper.find('button').simulate('click', { preventDefault: sinon.spy() });

    expect(
      spy.calledOnce
    ).to.be.true;
  });
});
