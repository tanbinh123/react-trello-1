import * as React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Button, Popup } from '..'
import { deleteColumn } from '../../graphql/mutations'
import Card, { TCard } from '../Card'
import AddCard from '../Board/InputAddCard'

const grid = 8

interface HeaderProps {
  isDragging: boolean
}

const Header = styled('div')<HeaderProps>`
  padding: 0px 0 0 8px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
`

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? 'lightblue' : '#e2e4e6',
  margin: '5px',
  padding: grid,
  width: 200,
})

type Props = {
  id: string
  name: string
  position: number
  items: TCard[]
  index: number
  refetch: any
  // changeCard(listId: string, index: number, newName: string): void
  // addCard(listId: string, card: TCard): void
  // removeCard(listId: string, index: number): void
  // addList(listName: string): void
  // removeColumn(id: string): void
}

const Column: React.FC<Props> = props => {
  const { id, name, items, index, refetch } = props
  const [deleteColumnMutation] = useMutation(gql(deleteColumn))

  const handleDelete = async () => {
    console.log('delete column', id)
    try {
      await deleteColumnMutation({ variables: { input: { id } } })
      await refetch()
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div style={{ margin: '5px', maxWidth: '300px' }} data-testid="list">
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => {
          return (
            <div
              className="bg-gray-400 rounded m-2 shadow"
              ref={provided.innerRef}
              {...provided.draggableProps}
            >
              <Header
                // ref={provided.innerRef}
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {name}
                </span>
                <span onClick={handleDelete}>
                  <Popup
                    trigger={
                      <Button icon="delete" data-testid="delete-button-list" />
                    }
                    content="delete this list"
                  />
                </span>
              </Header>
              <Droppable droppableId={id}>
                {(droppableProvided, droppableSnapshot) => {
                  return (
                    <div>
                      <div
                        ref={droppableProvided.innerRef}
                        style={getListStyle(droppableSnapshot.isDraggingOver)}
                      >
                        {items &&
                          items.map((item, idx) => (
                            <Card
                              item={item}
                              key={item.id}
                              index={idx}
                              listId={id}
                            />
                          ))}
                        {droppableProvided.placeholder}
                      </div>
                      <AddCard listId={id} />
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
