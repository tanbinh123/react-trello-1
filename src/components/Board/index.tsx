import * as React from 'react'
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from 'react-beautiful-dnd'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { List } from '../'
import AddList from '../AddList'
import * as S from './styles'
import { listColumns } from '../../graphql/queries'
import { updateCard, updateColumn } from '../../graphql/mutations'
import {
  ListColumnsQuery,
  UpdateCardMutation,
  UpdateCardMutationVariables,
  UpdateColumnMutation,
  UpdateColumnMutationVariables,
} from '../../API'

const Board: React.FC = () => {
  const { data, loading, error, refetch } = useQuery<ListColumnsQuery>(
    gql(listColumns)
  )
  const [updateCardMutation] = useMutation<
    UpdateCardMutation,
    UpdateCardMutationVariables
  >(gql(updateCard))
  const [updateColumnMutation] = useMutation<
    UpdateColumnMutation,
    UpdateColumnMutationVariables
  >(gql(updateColumn))

  const lists: any[] =
    (data && data.listColumns && data.listColumns.items) || []

  const numLists = lists.length || 0

  const onDragEnd: OnDragEndResponder = async result => {
    const { source, destination, type, draggableId } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    if (type === 'COLUMN') {
      const input = { id: draggableId, position: destination.index }
      await updateColumnMutation({ variables: { input } })

      // TODO update columns in between source and destination

      return
    }

    // Card reordering in the same list
    if (source.droppableId === destination.droppableId) {
      const input = { id: draggableId, position: destination.index }
      await updateCardMutation({ variables: { input } })

      // TODO: update cards in between source and destination
      // const columnId = source.droppableId
      // const items = lists.find(list => list.id === columnId).cards.items

      return
    }

    // Card moving between lists
    const cardId = draggableId
    const destinationList = lists.find(
      list => list.id === destination.droppableId
    )
    const position = destinationList.cards.items.length
    const input = {
      id: cardId,
      cardColumnId: destination!.droppableId,
      position,
    }
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
        <AddList refetch={refetch} numColumns={numLists} />
      </div>
    </React.Fragment>
  )
}

export default Board
