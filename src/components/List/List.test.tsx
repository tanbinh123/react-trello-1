import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/react-testing'
// import { CreateColumnMutation } from '../../API'

import { List } from './index'
import { DndProvider } from '../utils'

const noop = () => {}
const mocks: [] = []
const props = {
  id: '1',
  name: 'test',
  position: 0,
  items: [],
  index: 0,
  refetch: noop,
}

describe('<List />', () => {
  it('renders without crashing', () => {
    render(
      <MockedProvider mocks={mocks}>
        <DndProvider>
          <List {...props} />
        </DndProvider>
      </MockedProvider>
    )
  })

  it('folds on fold button press', () => {
    render(
      <MockedProvider mocks={mocks}>
        <DndProvider>
          <List {...props} />
        </DndProvider>
      </MockedProvider>
    )
    expect(true).toBe(false)
  })
})
