import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Popup, Timer } from '..'

import { handleLogout } from '../../utils'

const Navbar = () => {
  // trick to keep the timer mounted at all times
  // and thus keep its state between show and hide
  const [showTimer, setShowTimer] = useState(false)
  return (
    <nav className="h-16 flex justify-between items-center bg-blue-700">
      <div />
      <Link to="/">{/* <S.Logo src={logo} alt="" /> */}</Link>
      <div>
        <Popup
          open={true}
          style={{
            zIndex: showTimer ? 1 : -1,
          }}
          content={<Timer />}
          header="Timer"
          position="top center"
          on="click"
          trigger={
            <Button
              color="blue"
              onClick={() => setShowTimer(prev => !prev)}
              icon
              data-testid="timer-button"
            >
              <Icon name="clock outline" />
            </Button>
          }
        />
        <Button color="blue" data-testid="logout-button" onClick={handleLogout}>
          Sign out
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
