import React, { useState, useEffect } from 'react'
import { withRouter, Route, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'

const ProtectedRoute = (props: any) => {
  const { component: Component, ...rest } = props

  const [loaded, setLoaded] = useState(false)
  const [isAuthenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        if (user) {
          setAuthenticated(true)
        }
      } catch (error) {
        props.history.push('/login')
      }
      setLoaded(true)
    }
    checkUser()
  }, [props.history])

  if (!loaded) return <div>hanging out</div>

  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }}
    />
  )
}

export default withRouter(ProtectedRoute)
