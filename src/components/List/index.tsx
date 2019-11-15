import * as React from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import styled from 'styled-components'
import {Button, Popup} from 'semantic-ui-react'
// import styled, {StyledFunction, StyledProps} from 'styled-components'
  
import Card, {TCard} from '../Card' 
import AddCard from '../Board/InputAddCard'

const grid = 8

const ColumnWrapper = styled('div')`
  background: #e2e4e6;
  border-radius: 5px;
  margin: 5px;
`

interface IMyHeaderProps {
  isDragging: boolean
}

const Header = styled('div')<IMyHeaderProps>`
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
  id: string,
  items: TCard[],
  index: number,
  changeCard(listId: string, index: number, newName: string): void,
  addCard(listId: string, card: TCard): void,
  removeCard(listId: string, index: number): void,
  addList(listName: string): void,
  removeColumn(id: string): void,
}

const Column:React.FC<Props> = props => {
  const {id, items, index, changeCard, removeCard, removeColumn} = props

  const handleDelete = () => {
    console.log('handledelete')
    removeColumn(id)
  }
 
    return (
      <div style={{margin: '5px'}}>
        <Draggable draggableId={id} index={index}>
          {(provided, snapshot) => {
            return (
              <ColumnWrapper
                ref={provided.innerRef}
                {...provided.draggableProps}
              >
                <Header
                  // ref={provided.innerRef}
                  isDragging={snapshot.isDragging}
                  {...provided.dragHandleProps}
                >
                  <span style={{display: 'flex', alignItems: 'center'}}>
                    {id}
                  </span>
                  <span onClick={handleDelete}>
                    <Popup
                      trigger={<Button icon="delete" />}
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
                          {items && items.map((item, idx) => (
                            <Card
                              item={item}
                              key={item.id}
                              index={idx}
                              changeCard={changeCard}
                              removeCard={removeCard}
                              listId={id}
                            />
                          ))}
                          {droppableProvided.placeholder}
                        </div>
                        <AddCard addNewCard={props.addCard} listId={id} />
                      </div>
                    )
                  }}
                </Droppable>
              </ColumnWrapper>
            )
          }}
        </Draggable>
      </div>
    )
  }

  export default Column
