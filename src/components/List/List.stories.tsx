import React from 'react'

import { List } from '.'
import { DndProvider } from '../utils'

const noop = () => {}

export const empty = () => (
  <List
    id={'My List'}
    position={1}
    name={'My List'}
    index={1}
    key={1}
    items={[]}
    refetch={noop}
  />
)

export const withItems = () => (
  <List
    id={'My List'}
    position={1}
    name={'My List'}
    index={1}
    key={1}
    items={[
      { id: '1', content: 'first', position: 0 },
      { id: '2', content: 'second', position: 1 },
    ]}
    refetch={noop}
  />
)

export default {
  title: 'List',
  decorators: [(storyFn: any) => <DndProvider>{storyFn()}</DndProvider>],
}
