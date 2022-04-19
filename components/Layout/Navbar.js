import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
    <h4 id='logo'>Eventy</h4>
    <ul>
      <li><Link href='/'>Events</Link></li>
      <li><Link href='/'>Add Event</Link></li>
      <li><Link href='/'>About</Link></li>
      <li><Link href='/'>Follow Us</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar