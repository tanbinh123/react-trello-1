import * as React from 'react'

import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Input } from '../'
import { createColumn } from '../../graphql/mutations'

type Props = {
  refetch: any
  placeholder?: string
}

const AddList: React.FC<Props> = props => {
  const [createColumnMutation] = useMutation(gql(createColumn))
  const { placeholder, refetch } = props
  const [text, setText] = React.useState<string>('')

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handlechange')
    setText(evt.target.value)
  }

  const handleSubmit = async (evt: React.FormEvent) => {
    console.log('handlesubmit')

    evt.preventDefault()
    try {
      await createColumnMutation({ variables: { input: { name: text } } })
      setText('')
      await refetch()
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <div
      style={{
        display: 'inline',
        margin: '0 0 0 13px',
      }}
    >
      <form onSubmit={handleSubmit} style={{ display: 'inline' }}>
        <Input
          type="text"
          style={{ background: 'rgba(255,255,255,0.1)' }}
          placeholder={placeholder || 'Add a list...'}
          onChange={handleChange}
          value={text}
          data-testid="input-addlist"
        />
      </form>
    </div>
  )
}

export default AddList
