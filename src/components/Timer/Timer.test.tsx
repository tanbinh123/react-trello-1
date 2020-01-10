import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Timer } from './index'

describe('<Navbar />', () => {
  it('renders without crashing', () => {
    render(<Timer />)
  })

  it('contains a play and stop button by default', () => {
    const { getByTestId } = render(<Timer />)
    getByTestId('button-play')
    getByTestId('button-stop')
  })

  it('contains a pause and stop button after pressing play', () => {
    const { getByTestId } = render(<Timer />)
    fireEvent.click(getByTestId('button-play'))
    getByTestId('button-pause')
    getByTestId('button-stop')
  })

  it('contains a play and stop button after pressing play and then pause', () => {
    const { getByTestId } = render(<Timer />)
    fireEvent.click(getByTestId('button-play'))
    fireEvent.click(getByTestId('button-pause'))
    getByTestId('button-play')
    getByTestId('button-stop')
  })
})
