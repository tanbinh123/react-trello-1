import { v4 } from 'uuid'

export const reorderSingleList = (listToBeSorted: string[], startIndex, endIndex) => {
  const result = Array.from(listToBeSorted)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const reorderMultiple = (allItemsMap, source, destination) => {
  const currentList = [...allItemsMap[source.droppableId]]
  const nextList = [...allItemsMap[destination.droppableId]]
  const targetElem = currentList[source.index]

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorderSingleList(
      currentList,
      source.index,
      destination.index,
    )
    const items = {
      ...allItemsMap,
      [source.droppableId]: reordered,
    }
    return {
      items,
    }
  }

  // moving to different list

  // remove from original
  currentList.splice(source.index, 1)
  // insert into next
  nextList.splice(destination.index, 0, targetElem)

  const result = {
    ...allItemsMap,
    [source.droppableId]: currentList,
    [destination.droppableId]: nextList,
  }

  return {
    items: result,
  }
}


export const getInitial = () => {
  return {
    Inbox: [{id: v4(), content: 'learn redux'}, {id: v4(), content: 'something else'}],
    Today: [{id: v4(), content: 'clean room'}],
  }
}
