import * as React from 'react'

import { Input } from '../'

type Props = {
  addList(text: string): boolean
  placeholder?: string
}

const AddList: React.FC<Props> = props => {
  const { addList, placeholder } = props
  const [text, setText] = React.useState<string>('')

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handlechange')
    setText(evt.target.value)
  }

  const handleSubmit = (evt: React.FormEvent) => {
    console.log('handlesubmit')

    evt.preventDefault()
    if (addList(text)) {
      setText('')
    } else {
      alert(`List name ${text} is already taken. Please choose another name.`)
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
