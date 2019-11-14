import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'
import Login from '../../screens/Login'

describe('<Login />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Login />)
    expect(container).toMatchSnapshot()
  })

  it('renders a login box', () => {
    const { container } = render(<Login />)
    expect(container).toBeInTheDOM()
    expect(container).toHaveTextContent('email')
    expect(container).toHaveTextContent('password')
    expect(container).toHaveTextContent('Log in')
  })
})
