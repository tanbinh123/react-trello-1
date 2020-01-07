import React, { useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

import { CardItem } from '../../types'
import { Card } from '../Card'
import AddCard from '../Board/InputAddCard'
import { Header } from './ListHeader'

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? 'lightblue' : '',
  margin: '0 10px 10px',
  width: 200,
})

type Props = {
  id: string
  name: string
  position: number
  items: CardItem[]
  index: number
  refetch: any
}

const Column: React.FC<Props> = props => {
  const { id, name, items, index, refetch } = props
  const [isFolded, setFolded] = useState(false)

  const toggleFold = () => {
    console.log('toggle')
    setFolded(prev => !prev)
  }

  if (isFolded) {
    return (
      <div style={{ position: 'relative', width: '30px' }}>
        <div
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div
            onClick={toggleFold}
            style={{
              transform: 'rotate(90deg)',
              cursor: 'pointer',
              fontSize: '24px',
              marginLeft: '10px',
              letterSpacing: '1px',
            }}
          >
            <span
              style={{ textTransform: 'uppercase', fontStyle: 'italic' }}
              className="mt-16"
            >
              {name}
            </span>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div style={{ maxWidth: '300px' }} data-testid="list">
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => {
          return (
            <div className="bg-gray-400 rounded m-2 mt-0 shadow">
              <Header
                columnId={id}
                isDragging={snapshot.isDragging}
                dragHandleProps={provided.dragHandleProps}
                name={name}
                {...{ id, refetch, toggleFold }}
                // {...provided.dragHandleProps}
              />

              <Droppable droppableId={id}>
                {(droppableProvided, droppableSnapshot) => {
                  return (
                    <div className="flex flex-col items-center">
                      <div
                        ref={droppableProvided.innerRef}
                        style={getListStyle(droppableSnapshot.isDraggingOver)}
                      >
                        {items &&
                          items
                            .sort((a, b) => a.position - b.position)
                            .map((item, idx) => (
                              <Card
                                item={item}
                                key={item.id}
                                index={idx}
                                listId={id}
                              />
                            ))}
                        {droppableProvided.placeholder}
                      </div>
                      <AddCard listId={id} listItems={items} />
                    </div>
                  )
                }}
              </Droppable>
            </div>
          )
        }}
      </Draggable>
    </div>
  )
}

export default Column
