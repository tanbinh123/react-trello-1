import * as React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { v4 as uuid } from 'uuid'

import { Input } from '..'
import { createCard } from '../../graphql/mutations'

type Props = {
  listId: string
  listItems: any[]
}
const AddCard: React.FC<Props> = props => {
  const [createCardMutation] = useMutation(gql(createCard))
  const { listId, listItems } = props
  const [text, setText] = React.useState('')

  const handleBlur = () => {
    setText('')
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value)
  }

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const input = {
      id: uuid(),
      position: listItems.length,
      name: text,
      cardColumnId: listId,
    }
    console.log({ input })
    try {
      await createCardMutation({ variables: { input } })
      setText('')
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className="pb-4">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          className="addNewCard"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '0',
            cursor: 'pointer',
          }}
          placeholder="Add a card..."
          onChange={handleChange}
          onBlur={handleBlur}
          value={text}
        />
      </form>
    </div>
  )
}

export default AddCard
