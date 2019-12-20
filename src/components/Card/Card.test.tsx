import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/react-testing'

import { Card } from './index'
import { DndProvider } from '../utils'

const mocks: [] = []
const props = {
  index: 0,
  listId: '0',
  item: { id: '0', content: 'testCard', position: 0 },
}

describe('<Card />', () => {
  it('renders without crashing', () => {
    render(
      <MockedProvider mocks={mocks}>
        <DndProvider>
          <Card {...props} />
        </DndProvider>
      </MockedProvider>
    )
  })
})
