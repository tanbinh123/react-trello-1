import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '..'

import { handleLogout } from '../../utils'

const Navbar = () => {
  return (
    <nav className="h-16 flex justify-between items-center bg-blue-700">
      <div />
      <Link to="/">{/* <S.Logo src={logo} alt="" /> */}</Link>
      <div>
        <Button onClick={handleLogout}>Sign out</Button>
      </div>
    </nav>
  )
}

export default Navbar
