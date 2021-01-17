import React, { useContext } from 'react'
import * as ReactAll from 'react';
import { configure, shallow  } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { actionsCounter } from '../components/status/statusItem'
import Reactions from '../components/reactions';

configure({
  adapter: new Adapter()
})

describe('<Reactions/> Component', () => {

    function MyComponentWithContextNamedExport(props) {
        const myValue = useContext(actionsCounter);
        return <Reactions>{myValue}</Reactions>;
    }

    const wrapper = shallow(<MyComponentWithContextNamedExport />);
    expect(wrapper.text()).toEqual('');

    let contextSpy = null;
    beforeEach(() => {
      contextSpy = jest
        .spyOn(ReactAll, "useContext")
        .mockImplementation({ likes: 0 });
    });
    afterEach(() => {
      if (contextSpy) {
        contextSpy.mockRestore();
      }
    });

    test('Testing Component Render', () => {
        expect(wrapper).toHaveLength(1)
    })

})