import * as React from 'react'
import {Input} from 'semantic-ui-react';

export default class AddList extends React.Component<any> {
  state = { text: '' }

  // handleFocus = () => {}

  handleBlur = () => {
    // this.setState({ text: '' })
  }

  handleChange = e => {
    console.log('handlechange')
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    console.log('handlesubmit')
    const { text } = this.state
    e.preventDefault()
    if (this.props.addList(text)) {
      this.setState({ text: '' })
    } else {
      alert(`List name ${text} is already taken. Please choose another name.`)
    }
  }
  render() {
    return (
      <div
        style={{
          display: 'inline',
          margin: '0 0 0 13px',
        }}
      >
        <form onSubmit={this.handleSubmit} style={{ display: 'inline' }}>
          <Input
            type="text"
            style={{background: 'rgba(255,255,255,0.1)'}}
            placeholder={this.props.placeholder || 'Add a list...'}
            onChange={this.handleChange}
            // onFocus={() => console.log('focus')}
            onBlur={this.handleBlur}
            value={this.state.text}
          />
        </form>
      </div>
    )
  }
}
