import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { updateColumn, deleteColumn } from '../../graphql/mutations'
import { Button, Popup } from '..'
import { Form, Loader } from 'semantic-ui-react'

interface HeaderProps {
  columnId: string
  isDragging: boolean
  dragHandleProps: any
  name: string
  id: string
  refetch: any
  toggleFold(): void
}

const MyHeader = styled('div')<HeaderProps>`
  padding: 5px 0 0 8px;
  margin: 0 5px 5px 5px;
  display: flex;
  justify-content: space-between;
`

export const Header: React.FC<HeaderProps> = props => {
  const {
    columnId,
    isDragging,
    dragHandleProps,
    name,
    id,
    refetch,
    toggleFold,
  } = props
  const [isEditing, setEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [editingName, setEditingName] = useState(name)
  const [updateColumnMutation] = useMutation(gql(updateColumn))
  const [deleteColumnMutation] = useMutation(gql(deleteColumn))

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await deleteColumnMutation({ variables: { input: { id } } })
      await refetch()
    } catch (error) {
      alert(error)
    } finally {
      setIsDeleting(false)
    }
  }

  const handleDoubleClick = () => {
    setEditing(true)
  }

  const handleSubmit = async () => {
    if (name === editingName) {
      return setEditing(false)
    }
    setLoading(true)
    const input = { id: columnId, name: editingName }
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
      <span>
        <span onClick={() => toggleFold()}>
          <Button icon="resize horizontal" size="tiny" />
        </span>
        <span onClick={handleDelete}>
          {isDeleting ? (
            <Loader active inline />
          ) : (
            <Popup
              trigger={
                <Button
                  icon="delete"
                  size="mini"
                  data-testid="delete-button-list"
                />
              }
              content="delete this list"
            />
          )}
        </span>
      </span>
    </MyHeader>
  )
}
