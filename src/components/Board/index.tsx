// @ts-check
import * as React from "react";
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { Label } from "semantic-ui-react";

import Column from "./Column";
import InputAddColumn from "./InputAddColumn";
import * as S from "./styles";
import { reorderMultiple, reorderSingleList } from "./utils";

type Props = {};

type State = {
  itemsMap: any;
  orderedListKeys: string[];
};

const Board: React.FC<Props> = props => {
  const [itemsMap, setItemsMap] = React.useState({});
  const [orderedListKeys, setOrderedListKeys] = React.useState<string[]>([]);

  const addCard: (listId: string, card: any) => void = (listId, card) => {
    setItemsMap({
      ...itemsMap,
      [listId]: [...itemsMap[listId], card],
    });
  };

  const changeCard = (listId: string, index: number, newName: string) => {
    console.log("changecard", listId, index, newName);
  };

  const removeCard = (listId: string, index: number) => {
    itemsMap[listId].splice(index, 1);
    setItemsMap(itemsMap);
  };

  const addColumn = (listName: string) => {
    console.log("addList", listName);
    if (orderedListKeys.includes(listName)) {
      return false;
    }
    const newItemsMap = { ...itemsMap, [listName]: [] };
    const newOrderedListKeys = [...orderedListKeys, listName];

    setItemsMap(newItemsMap);
    setOrderedListKeys(newOrderedListKeys);
    // TODO throw instead of returning boolean
    return true;
  };

  const removeColumn = (listId: string) => {
    const index = orderedListKeys.findIndex(key => key === listId);
    if (index === undefined || !(listId in itemsMap)) {
      // debugger
    }
    orderedListKeys.splice(index, 1);
    delete itemsMap[listId];

    setItemsMap(itemsMap);
    setOrderedListKeys(orderedListKeys);
  };

  const onDragEnd: OnDragEndResponder = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (result.type === "COLUMN") {
      const newOrderedListKeys = reorderSingleList(
        orderedListKeys,
        source.index,
        destination.index,
      );
      return setOrderedListKeys(newOrderedListKeys);
    }

    const { items } = reorderMultiple(itemsMap, source, destination);
    setItemsMap(items);
  };

  const renderWalkthrough = () => {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          textAlign: "center",
        }}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}>
          <h2>Welcome!</h2>
          <p>Let's get started creating your first list!</p>
          <InputAddColumn
            addList={addColumn}
            placeholder="Enter your list name..."
          />
          <Label style={{ width: "fit-content" }} pointing="above">
            Press Enter when finished
          </Label>
        </div>
      </div>
    );
  };

  if (orderedListKeys.length === 0) {
    return renderWalkthrough();
  }
  return (
    <React.Fragment>
      <div style={{ flex: 1 }}>
        <DragDropContext
          // onDragStart={this.onDragStart}
          onDragEnd={onDragEnd}>
          <Droppable droppableId="board" type="COLUMN" direction="horizontal">
            {provided => {
              return (
                <S.BoardWrapper
                  ref={provided.innerRef}
                  {...provided.droppableProps}>
                  {orderedListKeys.map((key, index) => {
                    return (
                      <Column
                        id={key}
                        index={index}
                        key={key}
                        items={itemsMap[key]}
                        addCard={addCard}
                        changeCard={changeCard}
                        removeCard={removeCard}
                        addList={addColumn}
                        removeColumn={removeColumn}
                      />
                    );
                  })}
                </S.BoardWrapper>
              );
            }}
          </Droppable>
        </DragDropContext>
        <InputAddColumn addList={addColumn} />
      </div>
    </React.Fragment>
  );
};

export default Board;
