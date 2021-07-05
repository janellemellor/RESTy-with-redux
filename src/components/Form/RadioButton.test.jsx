import React from 'react';
import { shallow } from 'enzyme';
import { RadioButton } from './RadioButton';

describe('RadioButton component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<RadioButton id="GET" name="methods" value="GET" onChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
