// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateCard = `subscription OnCreateCard {
  onCreateCard {
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
export const onUpdateCard = `subscription OnUpdateCard {
  onUpdateCard {
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
export const onDeleteCard = `subscription OnDeleteCard {
  onDeleteCard {
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
export const onCreateColumn = `subscription OnCreateColumn {
  onCreateColumn {
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
export const onUpdateColumn = `subscription OnUpdateColumn {
  onUpdateColumn {
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
export const onDeleteColumn = `subscription OnDeleteColumn {
  onDeleteColumn {
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
export const onCreateBoard = `subscription OnCreateBoard {
  onCreateBoard {
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
export const onUpdateBoard = `subscription OnUpdateBoard {
  onUpdateBoard {
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
export const onDeleteBoard = `subscription OnDeleteBoard {
  onDeleteBoard {
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
