import * as React from 'react'
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from 'react-beautiful-dnd'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { List } from '../'
import InputAddColumn from './InputAddColumn'
import * as S from './styles'
import { reorderMultiple, reorderSingleList } from './utils'
// import { TCard } from '../Card'
import { listColumns } from '../../graphql/queries'

const Board: React.FC = () => {
  const { data, refetch } = useQuery(gql(listColumns))

  // const [itemsMap, setItemsMap] = React.useState<{ [key: string]: TCard[] }>({
  //   tmp: [{ id: '1', content: 'tmp tmp' }],
  // })

  const [orderedListKeys, setOrderedListKeys] = React.useState<string[]>([])

  const onDragEnd: OnDragEndResponder = result => {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    if (result.type === 'COLUMN') {
      const newOrderedListKeys = reorderSingleList(
        orderedListKeys,
        source.index,
        destination.index
      )
      // return setOrderedListKeys(newOrderedListKeys)
    }

    // const { items } = reorderMultiple(itemsMap, source, destination)
    // setItemsMap(items)
  }

  // if (orderedListKeys.length === 0) {
  //   return renderWalkthrough()
  // }

  const myLists: any[] =
    (data && data.listColumns && data.listColumns.items) || []

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
                  {myLists.map((list, index) => {
                    return (
                      <List
                        id={list.id}
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
        <InputAddColumn refetch={refetch} />
      </div>
    </React.Fragment>
  )
}

export default Board
