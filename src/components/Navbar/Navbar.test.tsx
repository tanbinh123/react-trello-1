import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router'

import { Navbar } from './index'

const Component = () => (
  <MemoryRouter>
    <Navbar />
  </MemoryRouter>
)

describe('<Navbar />', () => {
  it('renders without crashing', () => {
    render(<Component />)
  })
  it('contains timer button', () => {
    const { getByTestId } = render(<Component />)
    getByTestId('timer-button')
  })
  it('contains logout button', () => {
    const { getByTestId } = render(<Component />)
    getByTestId('logout-button')
  })
})
