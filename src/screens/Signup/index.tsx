import { Auth } from 'aws-amplify'
import React, { Fragment, useState } from 'react'
import { Button, Divider, Form, Input, Label } from '../../components'
import { RouteComponentProps } from 'react-router-dom'

const SignupWrapper: React.FC = ({ children }) => {
  return (
    <div
      className="flex flex-1 flex-col items-center bg-blue-500 h-screen"
      style={{ paddingTop: '10vh' }}
    >
      {children}
    </div>
  )
}

type Props = {} & RouteComponentProps

const initialFormState = { email: '', password: '', confirmationCode: '' }

const Signup: React.FC<Props> = props => {
  const [formState, setFormState] = useState(initialFormState)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [newUser, setNewUser] = useState<any>(null)
  const { email, password, confirmationCode } = formState

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault()
    setLoading(true)
    try {
      const newUser = await Auth.signUp({
        password: formState.password,
        username: formState.email,
      })
      setNewUser(newUser)
    } catch (error) {
      alert(error)
    }
    setLoading(false)
  }

  const handleConfirmationSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setLoading(false)

    try {
      await Auth.confirmSignUp(email, confirmationCode)
      await Auth.signIn(email, password)
      props.history.push('/app')
    } catch (e) {
      alert(e)
      setLoading(false)
    }
  }

  const renderConfirmationForm = () => {
    return (
      <form onSubmit={handleConfirmationSubmit}>
        <label htmlFor="">Your confirmation code</label>
        <input
          type="text"
          name="confirmationCode"
          id="confirmationCode"
          value={confirmationCode}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }

  const renderForm = () => {
    return (
      <Fragment>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Label pointing="below">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              value={email}
              onChange={handleChange}
            />
          </Form.Field>

          <Divider />

          <Form.Field>
            <Label pointing="below" htmlFor="">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter a password..."
              value={password}
              onChange={handleChange}
            />
          </Form.Field>
          <Button type="submit">Register</Button>
        </Form>
      </Fragment>
    )
  }

  if (isLoading) {
    return <SignupWrapper>loading ...</SignupWrapper>
  }
  return (
    <SignupWrapper>
      <h1 className="text-white text-5xl mb-2">Sign up</h1>
      {newUser ? renderConfirmationForm() : renderForm()}
    </SignupWrapper>
  )
}

export default Signup
