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

type State = {
  itemsMap: any;
  orderedListKeys: string[];
};

type Props = {};
class Board extends React.Component<Props, State> {
  state: State = {
    itemsMap: {},
    orderedListKeys: [],
  };

  addCard: (listId: string, card: any) => void = (listId, card) => {
    const itemsMap = {
      ...this.state.itemsMap,
      [listId]: [...this.state.itemsMap[listId], card],
    };
    this.setState({ itemsMap });
  };

  changeCard = (listId: string, index: number, newName: string) => {
    console.log("changecard", listId, index, newName);
  };

  removeCard = (listId, index) => {
    const { itemsMap } = this.state;
    itemsMap[listId].splice(index, 1);
    this.setState(itemsMap);
  };

  addColumn = (listName: string) => {
    console.log("addList", listName);
    const { itemsMap, orderedListKeys } = this.state;
    if (orderedListKeys.includes(listName)) {
      return false;
    }
    itemsMap[listName] = [];
    orderedListKeys.push(listName);
    this.setState({ itemsMap, orderedListKeys });
    return true;
  };

  removeColumn = (listId: string) => {
    const { orderedListKeys, itemsMap } = this.state;
    const index = orderedListKeys.findIndex(key => key === listId);
    if (index === undefined || !(listId in itemsMap)) {
      // debugger
    }
    orderedListKeys.splice(index, 1);
    delete itemsMap[listId];

    this.setState({ orderedListKeys, itemsMap });
  };

  onDragEnd: OnDragEndResponder = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (result.type === "COLUMN") {
      const orderedListKeys = reorderSingleList(
        this.state.orderedListKeys,
        source.index,
        destination.index,
      );

      return this.setState({
        orderedListKeys,
      });
    }

    const { items } = reorderMultiple(this.state.itemsMap, source, destination);

    this.setState({
      itemsMap: items,
    });
  };

  renderWalkthrough = () => {
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
            addList={this.addColumn}
            placeholder="Enter your list name..."
          />
          <Label style={{ width: "fit-content" }} pointing="above">
            Press Enter when finished
          </Label>
        </div>
      </div>
    );
  };

  render() {
    const { itemsMap, orderedListKeys } = this.state;
    if (orderedListKeys.length === 0) {
      return this.renderWalkthrough();
    }
    return (
      <React.Fragment>
        <div style={{ flex: 1 }}>
          <DragDropContext
            // onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}>
            <Droppable droppableId="board" type="COLUMN" direction="horizontal">
              {(provided, snapshot) => {
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
                          addCard={this.addCard}
                          changeCard={this.changeCard}
                          removeCard={this.removeCard}
                          addList={this.addColumn}
                          removeColumn={this.removeColumn}
                        />
                      );
                    })}
                  </S.BoardWrapper>
                );
              }}
            </Droppable>
          </DragDropContext>
          <InputAddColumn addList={this.addColumn} />
        </div>
      </React.Fragment>
    );
  }
}
export default Board;
