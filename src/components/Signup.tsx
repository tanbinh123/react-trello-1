import {Auth} from 'aws-amplify'
import React, {Component, Fragment} from 'react'
import {Button, Divider, Form, Input, Label} from 'semantic-ui-react'
import styled from 'styled-components'

const SignupWrapper = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class Signup extends Component<any, any> {
  state = {
    confirmationCode: '',
    email: '',
    isLoading: false,
    newUser: null,
    password: '',
  }

  handleChange = event => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({isLoading: true})
    try {
      const newUser = Auth.signUp({
        password: this.state.password,
        username: this.state.email,
      })
      this.setState({newUser})
    } catch (error) {
      alert(error)
    }
    this.setState({isLoading: false})
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault()

    this.setState({isLoading: true})

    try {
      await Auth.confirmSignUp(this.state.email, this.state.confirmationCode)
      await Auth.signIn(this.state.email, this.state.password)
      this.props.login()
      this.props.history.push('/')
    } catch (e) {
      alert(e)
      this.setState({isLoading: false})
    }
  }

  renderConfirmationForm = () => {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <label htmlFor="">Your confirmation code</label>
        <input
          type="text"
          name="confirmationCode"
          id="confirmationCode"
          value={this.state.confirmationCode}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }

  renderForm = () => {
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Label pointing="below" htmlFor="">
              Your email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Divider />

          <Form.Field>
            <Label pointing="below" htmlFor="">
              Your Password
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Fragment>
    )
  }

  render() {
    const {newUser, isLoading} = this.state
    if (isLoading) {
      return <SignupWrapper>loading ...</SignupWrapper>
    }
    return (
      <SignupWrapper>
        <h1 style={{color: 'white'}}>Sign up here</h1>
        {newUser ? this.renderConfirmationForm() : this.renderForm()}
      </SignupWrapper>
    )
  }
}

// const mapStateToProps = state => {
//   // return { user: state.common.user }
//   return {}
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     login: () => dispatch({ type: 'LOGIN_SUCCESS' }),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Signup)

export default Signup
