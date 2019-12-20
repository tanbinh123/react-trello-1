import React from 'react'
import { Navbar } from '.'
import { MemoryRouter } from 'react-router-dom'

export const basic = () => (
  <MemoryRouter>
    <div style={{ width: '100%' }}>
      <Navbar />
    </div>
  </MemoryRouter>
)

export default {
  title: 'Navigation Bar',
}
