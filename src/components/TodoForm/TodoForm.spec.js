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
    wrapper = shallow(<TodoForm dispatch={spy} />);
  });

  it('should have an input field', () => {
    expect(
      wrapper.find('input')
    ).to.exist;
  });

  it('should prevent default `submit` behaviour', () => {
    const eventSpy = sinon.spy();
    wrapper.simulate('submit', { preventDefault: eventSpy });

    expect(
      eventSpy.calledOnce
    ).to.be.true;
  });

  it('should call handler on `Enter` key press', () => {
    wrapper.find('input').simulate('keypress', event);

    expect(
      spy.calledOnce
    ).to.be.true;
  });

  it('should not call handler on empty or `space` only input', () => {
    const event = {
      charCode: 13,
      target: {
        value: ' ',
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

  it('should accept no more that 70 characters', () => {
    expect(
      wrapper.find('input').props().maxLength
    ).to.equal(70);
  });
});
