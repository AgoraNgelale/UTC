import React from 'react'
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
   <header className='padding-x mx-auto mt-10 z-10 w-full'>
    <nav className='max-w-[1640px] flex justify-between'>
      {/* Navigation Links */}
      <ul className='flex-1 flex
      justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((item)=>(
          <li key={item.label}>
            <a
              href={item.href}
              className=
             'font-montserrat leading-normal text-lg text-slate-gray hover:text-black transition-colors duration-200'
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
   </header>
  )
}

export default NavBar