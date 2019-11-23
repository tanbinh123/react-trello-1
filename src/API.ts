/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateCardInput = {
  id?: string | null,
  name: string,
  position: number,
  cardColumnId: string,
};

export type UpdateCardInput = {
  id: string,
  name?: string | null,
  position?: number | null,
  cardColumnId?: string | null,
};

export type DeleteCardInput = {
  id?: string | null,
};

export type CreateColumnInput = {
  id?: string | null,
  name: string,
  position: number,
  boardColumnsId?: string | null,
};

export type UpdateColumnInput = {
  id: string,
  name?: string | null,
  position?: number | null,
  boardColumnsId?: string | null,
};

export type DeleteColumnInput = {
  id?: string | null,
};

export type CreateBoardInput = {
  id?: string | null,
  name: string,
};

export type UpdateBoardInput = {
  id: string,
  name?: string | null,
};

export type DeleteBoardInput = {
  id?: string | null,
};

export type ModelCardFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  position?: ModelIntFilterInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelColumnFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  position?: ModelIntFilterInput | null,
  and?: Array< ModelColumnFilterInput | null > | null,
  or?: Array< ModelColumnFilterInput | null > | null,
  not?: ModelColumnFilterInput | null,
};

export type ModelBoardFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelBoardFilterInput | null > | null,
  or?: Array< ModelBoardFilterInput | null > | null,
  not?: ModelBoardFilterInput | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
};

export type CreateCardMutation = {
  createCard:  {
    __typename: "Card",
    id: string,
    name: string,
    position: number,
    column:  {
      __typename: "Column",
      id: string,
      name: string,
      position: number,
      cards:  {
        __typename: "ModelCardConnection",
        items:  Array< {
          __typename: "Card",
          id: string,
          name: string,
          position: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
};

export type UpdateCardMutation = {
  updateCard:  {
    __typename: "Card",
    id: string,
    name: string,
    position: number,
    column:  {
      __typename: "Column",
      id: string,
      name: string,
      position: number,
      cards:  {
        __typename: "ModelCardConnection",
        items:  Array< {
          __typename: "Card",
          id: string,
          name: string,
          position: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
};

export type DeleteCardMutation = {
  deleteCard:  {
    __typename: "Card",
    id: string,
    name: string,
    position: number,
    column:  {
      __typename: "Column",
      id: string,
      name: string,
      position: number,
      cards:  {
        __typename: "ModelCardConnection",
        items:  Array< {
          __typename: "Card",
          id: string,
          name: string,
          position: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type CreateColumnMutationVariables = {
  input: CreateColumnInput,
};

export type CreateColumnMutation = {
  createColumn:  {
    __typename: "Column",
    id: string,
    name: string,
    position: number,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        position: number,
        column:  {
          __typename: "Column",
          id: string,
          name: string,
          position: number,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateColumnMutationVariables = {
  input: UpdateColumnInput,
};

export type UpdateColumnMutation = {
  updateColumn:  {
    __typename: "Column",
    id: string,
    name: string,
    position: number,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        position: number,
        column:  {
          __typename: "Column",
          id: string,
          name: string,
          position: number,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteColumnMutationVariables = {
  input: DeleteColumnInput,
};

export type DeleteColumnMutation = {
  deleteColumn:  {
    __typename: "Column",
    id: string,
    name: string,
    position: number,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        position: number,
        column:  {
          __typename: "Column",
          id: string,
          name: string,
          position: number,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateBoardMutationVariables = {
  input: CreateBoardInput,
};

export type CreateBoardMutation = {
  createBoard:  {
    __typename: "Board",
    id: string,
    name: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        name: string,
        position: number,
        cards:  {
          __typename: "ModelCardConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateBoardMutationVariables = {
  input: UpdateBoardInput,
};

export type UpdateBoardMutation = {
  updateBoard:  {
    __typename: "Board",
    id: string,
    name: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        name: string,
        position: number,
        cards:  {
          __typename: "ModelCardConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteBoardMutationVariables = {
  input: DeleteBoardInput,
};

export type DeleteBoardMutation = {
  deleteBoard:  {
    __typename: "Board",
    id: string,
    name: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        name: string,
        position: number,
        cards:  {
          __typename: "ModelCardConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard:  {
    __typename: "Card",
    id: string,
    name: string,
    position: number,
    column:  {
      __typename: "Column",
      id: string,
      name: string,
      position: number,
      cards:  {
        __typename: "ModelCardConnection",
        items:  Array< {
          __typename: "Card",
          id: string,
          name: string,
          position: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      name: string,
      position: number,
      column:  {
        __typename: "Column",
        id: string,
        name: string,
        position: number,
        cards:  {
          __typename: "ModelCardConnection",
          nextToken: string | null,
        } | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetColumnQueryVariables = {
  id: string,
};

export type GetColumnQuery = {
  getColumn:  {
    __typename: "Column",
    id: string,
    name: string,
    position: number,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        position: number,
        column:  {
          __typename: "Column",
          id: string,
          name: string,
          position: number,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListColumnsQueryVariables = {
  filter?: ModelColumnFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListColumnsQuery = {
  listColumns:  {
    __typename: "ModelColumnConnection",
    items:  Array< {
      __typename: "Column",
      id: string,
      name: string,
      position: number,
      cards:  {
        __typename: "ModelCardConnection",
        items:  Array< {
          __typename: "Card",
          id: string,
          name: string,
          position: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBoardQueryVariables = {
  id: string,
};

export type GetBoardQuery = {
  getBoard:  {
    __typename: "Board",
    id: string,
    name: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        name: string,
        position: number,
        cards:  {
          __typename: "ModelCardConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListBoardsQueryVariables = {
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardsQuery = {
  listBoards:  {
    __typename: "ModelBoardConnection",
    items:  Array< {
      __typename: "Board",
      id: string,
      name: string,
      columns:  {
        __typename: "ModelColumnConnection",
        items:  Array< {
          __typename: "Column",
          id: string,
          name: string,
          position: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCardSubscription = {
  onCreateCard:  {
    __typename: "Card",
    id: string,
    name: string,
    position: number,
    column:  {
      __typename: "Column",
      id: string,
      name: string,
      position: number,
      cards:  {
        __typename: "ModelCardConnection",
        items:  Array< {
          __typename: "Card",
          id: string,
          name: string,
          position: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard:  {
    __typename: "Card",
    id: string,
    name: string,
    position: number,
    column:  {
      __typename: "Column",
      id: string,
      name: string,
      position: number,
      cards:  {
        __typename: "ModelCardConnection",
        items:  Array< {
          __typename: "Card",
          id: string,
          name: string,
          position: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard:  {
    __typename: "Card",
    id: string,
    name: string,
    position: number,
    column:  {
      __typename: "Column",
      id: string,
      name: string,
      position: number,
      cards:  {
        __typename: "ModelCardConnection",
        items:  Array< {
          __typename: "Card",
          id: string,
          name: string,
          position: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateColumnSubscription = {
  onCreateColumn:  {
    __typename: "Column",
    id: string,
    name: string,
    position: number,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        position: number,
        column:  {
          __typename: "Column",
          id: string,
          name: string,
          position: number,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateColumnSubscription = {
  onUpdateColumn:  {
    __typename: "Column",
    id: string,
    name: string,
    position: number,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        position: number,
        column:  {
          __typename: "Column",
          id: string,
          name: string,
          position: number,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteColumnSubscription = {
  onDeleteColumn:  {
    __typename: "Column",
    id: string,
    name: string,
    position: number,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        position: number,
        column:  {
          __typename: "Column",
          id: string,
          name: string,
          position: number,
        },
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateBoardSubscription = {
  onCreateBoard:  {
    __typename: "Board",
    id: string,
    name: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        name: string,
        position: number,
        cards:  {
          __typename: "ModelCardConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateBoardSubscription = {
  onUpdateBoard:  {
    __typename: "Board",
    id: string,
    name: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        name: string,
        position: number,
        cards:  {
          __typename: "ModelCardConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteBoardSubscription = {
  onDeleteBoard:  {
    __typename: "Board",
    id: string,
    name: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        name: string,
        position: number,
        cards:  {
          __typename: "ModelCardConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};
