/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { TodoForm } from './TodoForm';

describe('<TodoForm />', () => {
  it('should have an input field', () => {
    const wrapper = shallow(<TodoForm />);

    expect(
      wrapper.find('input')
    ).to.have.length(1);
  });

  /*
   * This is a stateless component and makes use of the 'ref'
   * attribute – currently unable to test more than what is below
   */

  // it('should dispatch an action on submit', () => {
  //   const spy = sinon.spy();
  //   const wrapper = shallow(<TodoForm dispatch={spy} />);

  //   wrapper.find('form').simulate('submit', { preventDefault() {} } );

  //   expect(
  //     spy.calledOnce
  //   ).to.be.true;
  // });
});
