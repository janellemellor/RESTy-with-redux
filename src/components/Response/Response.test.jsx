import React from 'react';
import { shallow } from 'enzyme';
import Response from './Response';

//skipping test until response is passed to component
describe.skip('Response Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
        <Response response='{}' />
    );
    expect(wrapper).toMatchSnapshot();
  });  
});
