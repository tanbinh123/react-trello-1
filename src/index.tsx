import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'whatwg-fetch'
import Amplify from 'aws-amplify'
import { Helmet } from 'react-helmet'
import 'semantic-ui-css/semantic.min.css'
import './styles/tailwind.css'

// import './index.css'
import * as serviceWorker from './serviceWorker'
import awsConfig from './aws_amplify'
import { Signup } from './components'
import ProtectedRoute from './components/ProtectedRoute'
import { LandingPage, Home, Login } from './screens'

Amplify.configure(awsConfig)

ReactDOM.render(
  <>
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
  </>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
