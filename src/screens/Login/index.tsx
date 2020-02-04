import * as React from 'react'

import { Formik } from 'formik'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import { Button, Divider, Form, Input, Progress, Icon } from '../../components'
import * as Yup from 'yup'
import { Message } from 'semantic-ui-react'
import { Helmet } from 'react-helmet-async'

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
    <>
      <Helmet>
        <title>Log In | Definitely not Trello</title>
      </Helmet>
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
              <div
                className="flex justify-center h-screen"
                style={{ padding: '10vh 0', backgroundColor: '#f5f5f5' }}
              >
                <div
                  className="w-1/3 bg-white px-12 shadow-2xl rounded text-gray-700 self-center"
                  style={{ minWidth: '400px' }}
                >
                  <h1 className="text-3xl text-center mb-4 pt-12 text-center">
                    Welcome
                  </h1>
                  <p className="mb-4 text-center">
                    Log in to continue using your board
                  </p>
                  <Form.Field>
                    <Input
                      id="email"
                      type="email"
                      icon="mail"
                      iconPosition="left"
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
                    <Input
                      id="password"
                      type="password"
                      icon="lock"
                      iconPosition="left"
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
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    fluid
                    color="green"
                  >
                    Continue
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
                      </div>
                    </Message.Content>
                  </Message>
                  {/* <Button
                  className="self-start"
                  // color="blue"
                  fluid
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
                </Button> */}

                  <h2 className="text-2xl mt-8 pb-8">
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
    </>
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
