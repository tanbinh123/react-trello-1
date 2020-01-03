// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateCard = `subscription OnCreateCard($owner: String!) {
  onCreateCard(owner: $owner) {
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
export const onUpdateCard = `subscription OnUpdateCard($owner: String!) {
  onUpdateCard(owner: $owner) {
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
export const onDeleteCard = `subscription OnDeleteCard($owner: String!) {
  onDeleteCard(owner: $owner) {
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
export const onCreateColumn = `subscription OnCreateColumn($owner: String!) {
  onCreateColumn(owner: $owner) {
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
export const onUpdateColumn = `subscription OnUpdateColumn($owner: String!) {
  onUpdateColumn(owner: $owner) {
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
export const onDeleteColumn = `subscription OnDeleteColumn($owner: String!) {
  onDeleteColumn(owner: $owner) {
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
export const onCreateBoard = `subscription OnCreateBoard($owner: String!) {
  onCreateBoard(owner: $owner) {
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
export const onUpdateBoard = `subscription OnUpdateBoard($owner: String!) {
  onUpdateBoard(owner: $owner) {
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
export const onDeleteBoard = `subscription OnDeleteBoard($owner: String!) {
  onDeleteBoard(owner: $owner) {
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
