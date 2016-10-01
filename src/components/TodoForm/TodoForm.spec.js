/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { TodoForm } from './TodoForm';

describe('<TodoForm />', () => {
  it('should contain an <input>', () => {
    const wrapper = shallow(<TodoForm />);

    expect(
      wrapper.find('input')
    ).to.have.length(1);
  });
});
