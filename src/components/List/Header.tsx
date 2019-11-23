import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { updateColumn } from '../../graphql/mutations'
import { Button, Popup } from '..'
import { Form } from 'semantic-ui-react'

interface HeaderProps {
  columnId: string
  isDragging: boolean
  dragHandleProps: any
  name: string
  handleDelete: any
}

const MyHeader = styled('div')<HeaderProps>`
  padding: 0px 0 0 8px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
`

export const Header: React.FC<HeaderProps> = props => {
  const { columnId, isDragging, dragHandleProps, name, handleDelete } = props
  const [isEditing, setEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editingName, setEditingName] = useState(name)
  const [updateColumnMutation] = useMutation(gql(updateColumn))

  const handleDoubleClick = () => {
    setEditing(true)
  }

  const handleSubmit = async () => {
    if (name === editingName) {
      return setEditing(false)
    }
    setLoading(true)
    const input = { id: columnId, name: editingName }
    console.log({ input })
    try {
      await updateColumnMutation({ variables: { input } })
    } catch (error) {
      alert(error)
    }
    setLoading(false)
    setEditing(false)
  }

  return (
    <MyHeader isDragging={isDragging} {...dragHandleProps}>
      {isEditing && (
        <Form onSubmit={handleSubmit}>
          <Form.Input
            loading={loading}
            value={editingName}
            onChange={e => {
              setEditingName(e.target.value)
            }}
            onBlur={() => setEditing(false)}
          />
        </Form>
      )}
      {!isEditing && (
        <span
          onDoubleClick={handleDoubleClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'text',
          }}
        >
          {name}
        </span>
      )}
      <span onClick={handleDelete}>
        <Popup
          trigger={<Button icon="delete" data-testid="delete-button-list" />}
          content="delete this list"
        />
      </span>
    </MyHeader>
  )
}
