import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Popup, Timer } from '..'

import { handleLogout } from '../../utils'

const Navbar = () => {
  return (
    <nav className="h-16 flex justify-between items-center bg-blue-700">
      <div />
      <Link to="/">{/* <S.Logo src={logo} alt="" /> */}</Link>
      <div>
        <Popup
          content={<Timer />}
          header="Timer"
          position="top center"
          on="click"
          trigger={
            <Button icon data-testid="timer-button">
              <Icon name="clock outline" />
            </Button>
          }
        />
        <Button data-testid="logout-button" onClick={handleLogout}>
          Sign out
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
