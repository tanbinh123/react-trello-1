import * as React from 'react'
import {Input} from 'semantic-ui-react';
import { v4 } from 'uuid'

type Props = {
  addNewCard: any,
  listId: string
}
const AddCard: React.FC<Props> = props => {
  const {addNewCard, listId} = props;
  const [text, setText] = React.useState('')

  const handleBlur = () => {
    setText('')
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value)
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const card = { id: v4(), content: text }
    addNewCard(listId, card)
    setText('')
  }
    return (
      <div style={{ margin: '0 0 0 13px', padding: '0 0 20px 0' }}>
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