import { Auth } from 'aws-amplify'
import React, { useState } from 'react'
import { Button, Divider, Form, Input } from '../../components'
import { RouteComponentProps } from 'react-router-dom'

const SignupWrapper: React.FC = ({ children }) => {
  return (
    <div
      className="flex flex-1 flex-col items-center h-screen"
      style={{ paddingTop: '10vh', backgroundColor: '#f5f5f5' }}
    >
      <div className="bg-white p-8 rounded shadow-2xl">{children}</div>
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
      <Form className="flex flex-col" onSubmit={handleConfirmationSubmit}>
        <label htmlFor="confirmationCode" className="text-center">
          Your confirmation code:
        </label>
        <Form.Field>
          <Input
            type="text"
            name="confirmationCode"
            id="confirmationCode"
            placeholder="confirmation code..."
            value={confirmationCode}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    )
  }

  const renderForm = () => {
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Input
              type="email"
              name="email"
              icon="mail"
              iconPosition="left"
              id="email"
              placeholder="Enter your email..."
              value={email}
              onChange={handleChange}
            />
          </Form.Field>

          <Divider />

          <Form.Field>
            <Input
              type="password"
              name="password"
              icon="lock"
              iconPosition="left"
              id="password"
              placeholder="Enter a password..."
              value={password}
              onChange={handleChange}
            />
          </Form.Field>
          <Button type="submit" fluid color="green">
            Continue
          </Button>
        </Form>
      </>
    )
  }

  if (isLoading) {
    return <SignupWrapper>loading ...</SignupWrapper>
  }
  return (
    <SignupWrapper>
      <h1 className=" text-3xl mb-2 text-center">Sign up</h1>
      {newUser ? renderConfirmationForm() : renderForm()}
    </SignupWrapper>
  )
}

export default Signup
