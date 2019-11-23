// tslint:disable
// this is an auto generated file. This will be overwritten

export const createCard = `mutation CreateCard($input: CreateCardInput!) {
  createCard(input: $input) {
    id
    name
    position
    column {
      id
      name
      position
      cards {
        items {
          id
          name
          position
        }
        nextToken
      }
    }
  }
}
`;
export const updateCard = `mutation UpdateCard($input: UpdateCardInput!) {
  updateCard(input: $input) {
    id
    name
    position
    column {
      id
      name
      position
      cards {
        items {
          id
          name
          position
        }
        nextToken
      }
    }
  }
}
`;
export const deleteCard = `mutation DeleteCard($input: DeleteCardInput!) {
  deleteCard(input: $input) {
    id
    name
    position
    column {
      id
      name
      position
      cards {
        items {
          id
          name
          position
        }
        nextToken
      }
    }
  }
}
`;
export const createColumn = `mutation CreateColumn($input: CreateColumnInput!) {
  createColumn(input: $input) {
    id
    name
    position
    cards {
      items {
        id
        name
        position
        column {
          id
          name
          position
        }
      }
      nextToken
    }
  }
}
`;
export const updateColumn = `mutation UpdateColumn($input: UpdateColumnInput!) {
  updateColumn(input: $input) {
    id
    name
    position
    cards {
      items {
        id
        name
        position
        column {
          id
          name
          position
        }
      }
      nextToken
    }
  }
}
`;
export const deleteColumn = `mutation DeleteColumn($input: DeleteColumnInput!) {
  deleteColumn(input: $input) {
    id
    name
    position
    cards {
      items {
        id
        name
        position
        column {
          id
          name
          position
        }
      }
      nextToken
    }
  }
}
`;
export const createBoard = `mutation CreateBoard($input: CreateBoardInput!) {
  createBoard(input: $input) {
    id
    name
    columns {
      items {
        id
        name
        position
        cards {
          nextToken
        }
      }
      nextToken
    }
  }
}
`;
export const updateBoard = `mutation UpdateBoard($input: UpdateBoardInput!) {
  updateBoard(input: $input) {
    id
    name
    columns {
      items {
        id
        name
        position
        cards {
          nextToken
        }
      }
      nextToken
    }
  }
}
`;
export const deleteBoard = `mutation DeleteBoard($input: DeleteBoardInput!) {
  deleteBoard(input: $input) {
    id
    name
    columns {
      items {
        id
        name
        position
        cards {
          nextToken
        }
      }
      nextToken
    }
  }
}
`;
