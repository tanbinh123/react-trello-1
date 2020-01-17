import * as React from 'react'

import { Board, Navbar } from '../../components'

type Props = {
  handleLogout(): void
}

const App: React.FC<Props> = () => {
  return (
    <div className="bg-blue-500 min-h-screen overflow-x-hidden">
      <Navbar />
      <Board />
    </div>
  )
}

export default App
