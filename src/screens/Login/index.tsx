import * as React from 'react'

import { Formik } from 'formik'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import { Button, Divider, Form, Input, Label, Progress } from '../../components'
import * as Yup from 'yup'

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
        email: 'testdrive@react-trello.com',
        password: 'testdrive',
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

      // {
      //   handleSubmit: myHandleSubmit,
      //   mapPropsToValues: () => ({ email: 'testdrive@react-trello.com', password: 'testdrive' }),

      // }
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
      }) => {
        if (isSubmitting) {
          return (
            <div className="flex items-center flex-col h-full justify-center">
              <div className="w-full">
                <Progress percent={100} indicating />
              </div>
              <h2>Looking for the keys ...</h2>
            </div>
          )
        }

        return (
          <Form onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <div className="w-1/2">
                <h1 className="text-3xl text-center">Log in </h1>
                <h2 className="text-2xl text-center">
                  to get access to your board
                </h2>
                <Form.Field>
                  <Label pointing="below" htmlFor="email">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="text"
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
