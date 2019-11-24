import React from 'react'
import { List } from '../components'
import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd'

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
      { id: '1', content: 'first' },
      { id: '2', content: 'second' },
    ]}
    refetch={noop}
  />
)

export default {
  title: 'List',
  decorators: [
    (storyFn: any) => (
      <DragDropContext onDragEnd={noop}>
        <Droppable droppableId="droppable-1" type="PERSON">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Draggable draggableId="draggable-1" index={0}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {storyFn()}
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    ),
  ],
}
