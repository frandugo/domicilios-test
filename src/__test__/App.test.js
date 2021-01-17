import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './../App';

configure({
  adapter: new Adapter()
})

describe('Mountin Component <App/>', () => {

  const wrapper = shallow(<App />)
  
  test('Testing Component render', () => {
    expect(wrapper).toHaveLength(1)
  })

  // beforeEach(() => {
  //   wrapper = shallow(<App title="" reactions={ reactions } />)
  // })

  // test('validating nodes', () => {
  //   const reactions = { likes: 2, dislikes: 3, happy: 2 }
  //   const wrapper = shallow(<App reactions={ reactions } />)
  //   expect(wrapper.find('h1').exists()).toBe(true)
  // })

  // test('validating props', () => {
  //   const list = { likes: 2, dislikes: 3, happy: 2 }
  //   const wrapper = shallow(<App reactions={ reactions } />)
  //   expect(wrapper.find('h1').exists()).toBe(true)
  //   wrapper.setProps({
  //      list: [
  //          { name: 'kiwi', id: 5 }
  //       ]
  //   })
  //   expect(wrapper.find('li').length).toBe(4)
  //   wrapper.setProps({
  //    title: 'lo que sea'
  //   })
  //   expect(wrapper.find('h1').text()).toBe('lo que sea')
  // })

  // test('validating css', () => {
  //   expect(wrapper.find('h1').hasClass('big')).toBe(true)
  // })

  // test('counter children', () => {
  //   expect(wrapper.find('ul').children().length).toBe(3)
  // })

  // test('First element', () => {
  //   expect(wrapper.find('li').first().html())
  // })

  // test('Last element', () => {
  //   expect(wrapper.find('li').last().html())
  // })

  // test('Parent index element', () => {
  //   expect(wrapper.find('ul').childAt(2).html())
  //   expect(wrapper.find('ul').childAt(2).text()).toBe('happies')
  // })

  // test('validate type element', () => {
  //   expect(wrapper.find('ul').childAt(2).type()).toBe('div')
  // })

  // you need to import ensyme to json for convert to json expect(toJson(wrapper)).toMatchSnapshot()
  // test('snapshots', () => {
  //   expect(wrapper.html()).toMatchSnapshot()
  // })

  // test('validar funcionamiento de botones', () => {
  //   wrapper.find('button').first().simulate('click')
  //   expect(wrapper.find('h1').text()).toBe(1)
  // })

})

