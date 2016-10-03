/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { TodoForm } from './TodoForm';

describe('<TodoForm />', () => {
  let spy;
  let wrapper;
  const event = {
    charCode: 13,
    target: {
      value: 'Hello, world',
    },
  };

  beforeEach(() => {
    spy = sinon.spy();
    wrapper = shallow(<TodoForm />);
  });

  it('should have an input field', () => {
    expect(
      wrapper.find('input')
    ).to.exist;
  });

  it('should prevent default `submit` behaviour', () => {
    wrapper.simulate('submit', { preventDefault: spy });

    expect(
      spy.calledOnce
    ).to.be.true;
  });

  it('should call dispatch on `Enter` key press', () => {
    const wrapper = shallow(<TodoForm dispatch={spy} />);

    wrapper.find('input').simulate('keypress', event);

    expect(
      spy.calledOnce
    ).to.be.true;
  });

  it('should not dispatch on empty or `space` only input', () => {
    const wrapper = shallow(<TodoForm dispatch={spy} />);
    const event = {
      charCode: 13,
      target: {
        value: '  ',
      },
    };

    wrapper.find('input').simulate('keypress', event);

    expect(
      spy.calledOnce
    ).to.be.false;
  });

  it('should reset the input field after dispatch', () => {
    wrapper.find('input').simulate('keypress', event);

    expect(
      event.target.value
    ).to.be.empty;
  });
});
