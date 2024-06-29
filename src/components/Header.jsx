import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../utils/constant'
import logo from '../assets/react.svg'

const Header = () => {
  const location = useLocation()

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-neutral">
      <nav className="container m-auto ">
        <ul className="flex justify-around items-center h-16 text-brand-teal border-b border-neutral">
          {NAV_LINKS.map((link) => (
            <li key={link.link} className="text-sm md:text-md lg:text-xl">
              {link.logo ? (
                <img src={logo} alt={link.alt} className="h-8 w-8" />
              ) : (
                <NavLink
                  to={link.link}
                  className={`${
                    location.pathname === link.link
                      ? 'text-brand-orange border-b-2 border-brand-orange'
                      : 'text-brand-teal hover:text-brand-orange transition duration-300 ease-in-out'
                  } relative pb-1`}
                >
                  {link.title}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-brand-orange transition-all duration-300 ease-in-out ${
                      location.pathname === link.link
                        ? 'scale-x-100'
                        : 'scale-x-0'
                    }`}
                  ></span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
