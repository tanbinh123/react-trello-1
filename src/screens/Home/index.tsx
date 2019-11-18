import * as React from 'react'

import { Board, Navbar } from '../../components'

type Props = {
  handleLogout(): void
}

const Home: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Board />
    </React.Fragment>
  )
}

export default Home
