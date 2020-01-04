import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Login from './index'

describe('<Login />', () => {
  it.skip('matches snapshot', () => {
    const { container } = render(<Login />)
    expect(container).toMatchSnapshot()
  })

  it.skip('renders a login box', () => {
    const { container } = render(<Login />)
    expect(container).toBeInTheDOM()
    expect(container).toHaveTextContent('email')
    expect(container).toHaveTextContent('password')
    expect(container).toHaveTextContent('Log in')
  })
})
