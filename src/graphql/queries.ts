// tslint:disable
// this is an auto generated file. This will be overwritten

export const getCard = `query GetCard($id: ID!) {
  getCard(id: $id) {
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
          owner
        }
        nextToken
      }
      owner
    }
    owner
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
      name
      position
      column {
        id
        name
        position
        cards {
          nextToken
        }
        owner
      }
      owner
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
        name
        position
        column {
          id
          name
          position
          owner
        }
        owner
      }
      nextToken
    }
    owner
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
          name
          position
          owner
        }
        nextToken
      }
      owner
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
        owner
      }
      nextToken
    }
    owner
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
          owner
        }
        nextToken
      }
      owner
    }
    nextToken
  }
}
`;
