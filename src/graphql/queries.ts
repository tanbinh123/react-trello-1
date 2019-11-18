// tslint:disable
// this is an auto generated file. This will be overwritten

export const getCard = `query GetCard($id: ID!) {
  getCard(id: $id) {
    id
    position
    name
    column {
      id
      name
      position
      cards {
        items {
          id
          position
          name
        }
        nextToken
      }
    }
  }
}
`;
export const listCards = `query ListCards(
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      position
      name
      column {
        id
        name
        position
        cards {
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
export const getColumn = `query GetColumn($id: ID!) {
  getColumn(id: $id) {
    id
    name
    position
    cards {
      items {
        id
        position
        name
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
export const listColumns = `query ListColumns(
  $filter: ModelColumnFilterInput
  $limit: Int
  $nextToken: String
) {
  listColumns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      position
      cards {
        items {
          id
          position
          name
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getBoard = `query GetBoard($id: ID!) {
  getBoard(id: $id) {
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
export const listBoards = `query ListBoards(
  $filter: ModelBoardFilterInput
  $limit: Int
  $nextToken: String
) {
  listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      columns {
        items {
          id
          name
          position
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
