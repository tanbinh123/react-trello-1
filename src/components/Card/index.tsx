import * as React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Button, Popup } from '../'
import { deleteCard } from '../../graphql/mutations'

export type TCard = {
  id: string
  content: string
  name?: string
}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  // borderRadius: '5px',
  // margin: `0 0 ${grid}px 0`,
  userSelect: 'none',
  maxWidth: '200px',

  // change background colour if dragging
  // background: isDragging ? 'lightgreen' : '#ffffff',

  // styles we need to apply on draggables
  ...draggableStyle,
})

const getItemClasses = (isDragging: boolean, draggableStyle: any) =>
  `${
    isDragging ? 'bg-green-500 shadow-lg' : 'bg-teal-100 shadow'
  } rounded p-2 mt-2`

const CardName = styled.div`
  display: flex;
  justify-content: space-between;
`

type Props = {
  item: TCard
  index: number
  listId: string
  // changeCard(listId: string, index: number, newName: string): void
  // removeCard(listId: string, index: number): void
}

const Card: React.FC<Props> = props => {
  const [deleteCardMutation] = useMutation(gql(deleteCard))
  const { item, index } = props

  // const handleChangeCard = e => {
  //   const newName = e.target.value;
  //   // const { listId, index } = this.props
  //   console.log("changecard");
  //   changeCard(listId, index, newName);
  // };

  const handleDelete = async () => {
    console.log('handledelete')
    // removeCard(listId, index)
    try {
      await deleteCardMutation({ variables: { input: { id: item.id } } })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
            className={getItemClasses(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            <CardName>
              <span
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {item.content || item.name}
              </span>
              <span onClick={handleDelete}>
                <Popup
                  trigger={
                    <Button style={{ background: 'inherit' }} icon="delete" />
                  }
                  content="delete this card"
                />
              </span>
            </CardName>
          </div>
        )
      }}
    </Draggable>
  )
}

export default Card
