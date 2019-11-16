import React from 'react'
import { action } from '@storybook/addon-actions'
// import { Button } from '@storybook/react/demo'
import { Card } from '../components'
import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd'
import 'semantic-ui-css/semantic.min.css'
import '../styles/tailwind.css'

const noop = () => {}
export default {
  title: 'Card',
}

export const basic = () => (
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
                <Card
                  item={{ id: '1', content: 'a title' }}
                  index={1}
                  listId="1"
                  changeCard={noop}
                  removeCard={noop}
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

// export const text = () => (
//   <Button onClick={action('clicked')}>Hello Button</Button>
// )

// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// )
