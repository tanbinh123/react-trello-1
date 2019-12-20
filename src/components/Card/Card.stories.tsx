import React from 'react'
import { Card } from '..'

import { DndProvider } from '../utils'

export const basic = () => (
  <Card
    item={{ id: '1', content: 'a title', position: 0 }}
    index={1}
    listId="1"
  />
)

export const longTitle = () => (
  <Card
    item={{
      id: '1',
      content: 'a veeeeeeeeeeery long title indeed',
      position: 0,
    }}
    index={1}
    listId="1"
  />
)

export default {
  title: 'Cards',
  decorators: [(storyFn: any) => <DndProvider>{storyFn()}</DndProvider>],
}
