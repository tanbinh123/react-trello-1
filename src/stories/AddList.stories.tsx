import React from 'react'
import { AddList } from '../components'
import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd'

const noop = () => {}

export const basic = () => <AddList refetch={noop} numColumns={0} />

export default {
  title: 'Add List',
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
