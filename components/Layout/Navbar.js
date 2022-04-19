import Link from "next/link";
import React from "react";
import {GiHamburgerMenu} from 'react-icons/gi'

// TODO : Hamburger menu with modal

function Navbar() {
  return (
    <nav>
      <h3 id="logo">Wreventra</h3>
      <ul className="md:flex hidden flex-row items-center justify-end gap-6">
        <li>
          <Link href="/">Events</Link>
        </li>
        <li>
          <Link href="/">Add Event</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Follow Us</Link>
        </li>
      </ul>
      <span className="md:hidden text-2xl items-center flex hover:text-red-500 transition-colors"><GiHamburgerMenu/></span>
      
    </nav>
  );
}

export default Navbar;
