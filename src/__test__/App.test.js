import { render, screen } from '@testing-library/react';

import { saludar, suma, createStore } from '../utils/functions'
import App from './../App';

test('renders learn react link', () => {
  render(<App />);
});

const saludarAhora = saludar('Pedro')
const sumando = suma(2, 7)

describe('grupo de pruebas 1', () => {


  test('Do Match', () => {
    expect(saludarAhora).toMatch('Hola')
  })

  test('Testing add', () => {
    expect(sumando).toBe(9)
  })

  test('Agregando una fruta', () => {
    const store = createStore()
    store.addFruit('fresa')
    store.addFruit('mango')
    expect(store.getFruits()).toStrictEqual(['fresa'])
  })

})
