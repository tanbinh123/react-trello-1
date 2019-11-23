import React from 'react'
import { action } from '@storybook/addon-actions'
// import { Button } from '@storybook/react/demo'
import { List } from '../components'
import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd'
import 'semantic-ui-css/semantic.min.css'
import '../styles/tailwind.css'

const noop = () => {}

export default {
  title: 'List',
}

export const empty = () => (
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
                <List
                  id={'My List'}
                  position={1}
                  name={'My List'}
                  index={1}
                  key={1}
                  items={[]}
                  refetch={noop}
                  // addList={noop}
                  // addCard={noop}
                  // changeCard={noop}
                  // removeCard={noop}
                  // removeColumn={noop}
                />
              </div>
            )}
          </Draggable>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
)
