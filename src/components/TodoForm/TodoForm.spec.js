/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { TodoForm } from './TodoForm';

describe('<TodoForm />', () => {
  let spy;
  let wrapper;
  let event = {
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
    ).to.have.length(1);
  });

  it('should prevent default `submit` behaviour', () => {
    wrapper.find('form').simulate('submit', { preventDefault: spy });

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

  it('should reset the input field after dispatch', () => {
    wrapper.find('input').simulate('keypress', event);

    expect(
      event.target.value
    ).to.be.empty;
  });
});
