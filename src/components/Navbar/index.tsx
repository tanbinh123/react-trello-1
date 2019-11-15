import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '..'

// import logo from '../../assets/logo.png'
// const logo = require('../../assets/logo.png')
import * as S from './styles'

import { handleLogout } from '../../utils'

const Navbar = () => {
  return (
    // <S.HeaderDiv>
    <nav className="h-16 flex justify-between items-center bg-blue-700">
      <div />
      <Link to="/">{/* <S.Logo src={logo} alt="" /> */}</Link>
      <div>
        <Button onClick={handleLogout}>Sign out</Button>
      </div>
    </nav>
    // </S.HeaderDiv>
  )
}

export default Navbar
