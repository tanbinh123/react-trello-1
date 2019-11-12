import { Auth } from "aws-amplify";




 export const handleLogout = async () => {
    console.log('signing out!')
    try {
      await Auth.signOut()
      // this.props.history.push('/')
      // this.setState({isLoggedIn: false})
    } catch (error) {
      console.error('error during logout', error)
    }
  }
