import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './../App';

configure({
  adapter: new Adapter()
})

describe('Mountin Component <App/>', () => {

  let wrapper = shallow(<App />)

  beforeEach(() => {
    wrapper = shallow(<App  />)
  })

  test('Testing Component render', () => {
    expect(wrapper).toHaveLength(1)
  })

})

