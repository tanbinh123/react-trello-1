import {Auth} from 'aws-amplify'
import * as React from 'react'
import styled from 'styled-components'
import {Route, Switch} from 'react-router-dom'

import Home from './screens/Home'
import Login from './screens/Login'

const AppWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0079bf;
  overflow: auto;
`

export class App extends React.Component<any> {
  state = {
    isLoading: false,
    isLoggedIn: false,
  }

  // async componentDidMount() {
  //   this.setState({isLoading: true})
  //   try {
  //     await Auth.currentSession()
  //     this.setState({isLoggedIn: true})
  //   } catch (e) {
  //     // console.error('error in CDM', e)
  //     if (e !== 'No current user') {
  //       // alert(e)
  //     }
  //   }
  //   this.setState({isLoading: false})
  // }

  handleLogin = async ({email, password}) => {
    try {
      const signInData = await Auth.signIn(email, password)
      if (signInData) {
        this.setState({isLoggedIn: true})
      }
      this.props.history.push('/')
    } catch (error) {
      console.log(error)
      return error
    }
  }

  handleLogout = async () => {
    console.log('signing out!')
    try {
      await Auth.signOut()
      this.props.history.push('/')
      // this.setState({isLoggedIn: false})
    } catch (error) {
      console.error('error during logout', error)
    }
  }

  render() {
    const {isLoading, isLoggedIn} = this.state
    const renderHome = routeProps => (
      <Home
        {...routeProps}
        isLoggedIn={isLoggedIn}
        handleLogout={this.handleLogout}
      />
    )
    const renderLogin = routeProps => (
      <Login {...routeProps} handleLogin={this.handleLogin} />
    )

    if (isLoading) {
      return <AppWrapper>"loading..."</AppWrapper>
    }
    return (
      <AppWrapper>
        
        <Switch>
          <Route
            exact={true}
            path="/"
            render={renderHome}
          />
          <Route
            exact={true}
            path="/login"
            render={renderLogin}
          />
        </Switch>
      </AppWrapper>
    )
  }
}

export default App
