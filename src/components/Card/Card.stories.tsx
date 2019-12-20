import React from 'react'
import { Card } from '..'
import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd'

const noop = () => {}

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
