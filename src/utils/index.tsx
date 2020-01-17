import { Auth } from 'aws-amplify'

export const DEMO_USERNAME = 'testdrive@react-trello.now.sh'

export const DEMO_PASSWORD = 'testdrive'

export const handleLogout = async () => {
  try {
    await Auth.signOut()
    console.log('signing out!')
    window.location.reload()
  } catch (error) {
    console.error('error during logout', error)
  }
}
