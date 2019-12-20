import React from 'react'
import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd'

const noop = () => {}

export const DndProvider: React.FC = ({ children }) => {
  return (
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
                  {children}
                </div>
              )}
            </Draggable>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
