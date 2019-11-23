import * as React from 'react'
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from 'react-beautiful-dnd'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { List } from '../'
import InputAddColumn from './AddNewListInput'
import * as S from './styles'
import { listColumns } from '../../graphql/queries'
import { updateCard } from '../../graphql/mutations'

const Board: React.FC = () => {
  const { data, loading, error, refetch } = useQuery(gql(listColumns))
  const [updateCardMutation] = useMutation(gql(updateCard))
  const lists: any[] =
    (data && data.listColumns && data.listColumns.items) || []
  const numLists: number = lists.length || 0

  const onDragEnd: OnDragEndResponder = async result => {
    const { source, destination, type, draggableId } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    if (type === 'COLUMN') {
      return alert('column reordering is not yet implemented')
    }

    // Card reordering in the same list
    if (source.droppableId === destination.droppableId) {
      return alert('card reordering is not yet implemented')
    }

    // Card moving between lists
    const cardId = draggableId
    const input = { id: cardId, cardColumnId: destination!.droppableId }
    await updateCardMutation({ variables: { input } })

    refetch()
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong...</div>
  }

  return (
    <React.Fragment>
      <div style={{ flex: 1 }}>
        <DragDropContext
          // onDragStart={this.onDragStart}
          onDragEnd={onDragEnd}
        >
          <Droppable droppableId="board" type="COLUMN" direction="horizontal">
            {provided => {
              return (
                <S.BoardWrapper
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {lists
                    .sort((a, b) => a.position - b.position)
                    .map((list, index) => {
                      return (
                        <List
                          id={list.id}
                          position={list.position}
                          name={list.name}
                          index={index}
                          key={list.id}
                          refetch={refetch}
                          items={list.cards.items}
                        />
                      )
                    })}
                </S.BoardWrapper>
              )
            }}
          </Droppable>
        </DragDropContext>
        <InputAddColumn refetch={refetch} numColumns={numLists} />
      </div>
    </React.Fragment>
  )
}

export default Board
