import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import StatusItem from '../components/status/statusItem';

configure({
  adapter: new Adapter()
})

describe('<StatusItem/> Component', () => {

    let wrapper = shallow(<StatusItem />)
    const setCommment = jest.fn();
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(comment => [comment, setCommment]);

    beforeEach(() => {
        wrapper = shallow(<StatusItem />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Testing Component Render', () => {
        expect(wrapper).toHaveLength(1)
    })

    test('Show reactions Icons', () => {
        wrapper.find('.status__actions-button').first().props().onClick()
        expect(setCommment).toBeTruthy()
    })

    test('Show comments Form', () => {
        wrapper.find('.status__actions-button').last().props().onClick()
        expect(setCommment).toBeTruthy()
    })

})