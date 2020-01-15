import * as React from 'react'

import { Formik } from 'formik'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import {
  Button,
  Divider,
  Form,
  Input,
  Label,
  Progress,
  Icon,
} from '../../components'
import * as Yup from 'yup'
import { Message } from 'semantic-ui-react'

type Props = {} & RouteComponentProps

const Login: React.FC<Props> = props => {
  const handleLogin: (input: {
    email: string
    password: string
  }) => Promise<any> = async ({ email, password }) => {
    try {
      await Auth.signIn(email, password)
      props.history.push('/app')
    } catch (error) {
      console.log(error)
      return error
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async ({ email, password }, { setSubmitting }) => {
        setSubmitting(true)
        const error = await handleLogin({ email, password })
        if (error) {
          console.warn('error', error)
        }
        setSubmitting(false)
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string().required(),
      })}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleReset,
        handleSubmit,
        isSubmitting,
        dirty,
        isValid,
        resetForm,
      }) => {
        if (isSubmitting) {
          return (
            <div className="flex items-center flex-col h-full justify-center h-screen">
              <div>
                <Progress percent={100} indicating />
                <h2 className="text-5xl text-center text-white">
                  Logging you in...
                </h2>
              </div>
            </div>
          )
        }

        return (
          <Form onSubmit={handleSubmit}>
            <div className="flex justify-center" style={{ marginTop: '10vh' }}>
              <div className="w-1/2">
                <h1 className="text-5xl text-center mb-2 text-white">
                  Log in to your board
                </h1>
                {/* <h2 className="text-2xl mb-2">to get access to your board</h2> */}
                <Form.Field>
                  <Label pointing="below" htmlFor="email">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email..."
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p className="text-yellow-500 text-2xl">
                      Your valid email is required
                    </p>
                  )}
                </Form.Field>
                <Divider />
                <Form.Field>
                  <Label pointing="below" htmlFor="password">
                    Your Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Your password..."
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <p className="text-yellow-500 text-2xl">
                      Enter your password
                    </p>
                  )}
                </Form.Field>
                {/* <Button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </Button> */}
                <Button type="submit" disabled={isSubmitting || !isValid}>
                  Submit
                </Button>

                <Message icon info size="tiny">
                  <Icon name="idea" />
                  <Message.Content>
                    <Message.Header>
                      Just want to try the app out?
                    </Message.Header>
                    <div className="flex justify-between">
                      <div>
                        You can use these credentials:
                        <pre>testdrive@react-trello.now.sh</pre>
                        <pre>testdrive</pre>
                      </div>
                      <Button
                        className="self-start"
                        color="blue"
                        onClick={() =>
                          resetForm({
                            values: {
                              email: 'testdrive@react-trello.now.sh',
                              password: 'testdrive',
                            },
                          })
                        }
                      >
                        Try out
                      </Button>
                    </div>
                  </Message.Content>
                </Message>

                <h2 className="text-2xl mt-8">
                  Or{' '}
                  <Link to="/signup" className="text-blue underline">
                    sign up
                  </Link>
                </h2>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

// const myHandleSubmit = async (
//   { email, password },
//   { setSubmitting, props, setError },
// ) => {
//   setSubmitting(true)
//   const error = await props.handleLogin({ email, password })
//   if (error) {
//     setError('failed to login')
//   }
//   setSubmitting(false)
// }

export default Login
