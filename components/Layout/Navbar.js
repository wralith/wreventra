import { useState, useEffect } from "react";
import Link from "next/link";
import {useWindowWidth} from '@react-hook/window-size'
import Backdrop from "../UI/Backdrop";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isHamburger, setIsHamburger] = useState(false);
  const windowWidth = useWindowWidth()
  
  // Listen window width to close modal if > tablet size
  useEffect(() => {
    if (windowWidth > 768) {
      setIsHamburger(false)
    }
  }, [windowWidth])

  const handleHamburgerMenu = () => {
    setIsHamburger(!isHamburger)
    console.log(isHamburger);
  };

  const mediumPlusListClasses = 'opacity-0 absolute pointer-events-none md:pointer-events-auto'
  const smallScreenListClasses = 'absolute flex flex-col gap-16 text-left m-auto mt-24 text-4xl opacity-100 bg-gray-900/50 pl-5 pr-10 py-10 rounded-lg border border-red-500/50 shadow-lg'
  

  return (
    <>
      {isHamburger ? <Backdrop onClick={handleHamburgerMenu} /> : ''}
      <nav>
        <h3 id="logo"><Link href='/'>Wreventra</Link></h3>
        <ul className={`${isHamburger ? smallScreenListClasses : mediumPlusListClasses} md:opacity-100 md:flex md:relative flex-row justify-end gap-6`}>
          <li>
            <Link href="/">Events</Link>
          </li>
          <li>
            <Link href="/new-event">Create Event</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Follow Us</Link>
          </li>
        </ul>
        <span
          onClick={handleHamburgerMenu}
          className="flex cursor-pointer items-center text-2xl transition-colors hover:text-red-500 md:hidden"
        >
          <GiHamburgerMenu />
        </span>
      </nav>
    </>
  );
}

export default Navbar;
