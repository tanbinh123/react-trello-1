import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'whatwg-fetch'
import Amplify, { Auth } from 'aws-amplify'
import { Helmet } from 'react-helmet'
import 'semantic-ui-css/semantic.min.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

// import './index.css'
import './styles/tailwind.css'
import * as serviceWorker from './serviceWorker'
import awsConfig from './aws-exports'
import { Signup } from './components'
import ProtectedRoute from './components/ProtectedRoute'
import { LandingPage, Home, Login } from './screens'

Amplify.configure(awsConfig)

const client = new ApolloClient({
  uri: awsConfig.aws_appsync_graphqlEndpoint,
  request: async operation => {
    const session = await Auth.currentSession()
    const token = session.getAccessToken()
    const jwt = token.getJwtToken()
    console.log({ jwt })
    operation.setContext({
      headers: {
        Authorization: jwt,
      },
    })
  },
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <div className="bg-blue-500 min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Definitely Not Trello</title>
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <ProtectedRoute path="/app" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
