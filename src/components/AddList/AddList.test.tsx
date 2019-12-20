import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/react-testing'

import { AddList } from './index'

const noop = () => {}
const mocks: [] = []

describe('<AddList />', () => {
  it('renders without crashing', () => {
    render(
      <MockedProvider mocks={mocks}>
        <AddList refetch={noop} numColumns={0} />
      </MockedProvider>
    )
  })
})
