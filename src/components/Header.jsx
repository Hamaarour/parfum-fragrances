// Header.js
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../utils/constant'
import logo from '../assets/react.svg'
import { FaBars, FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa'
import Cart from './Cart'
import Favorites from './Favorites'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { useFavorite } from '../contexts/FavoriteContext'
import Toast from './Toast'

const Header = () => {
  const location = useLocation()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false)
  const { cartItems } = useShoppingCart()
  const { favorites } = useFavorite()

  const toggleCart = (open) => {
    setIsCartOpen(open)
  }

  const toggleFavorite = (open) => {
    setIsFavoriteOpen(open)
  }

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-neutral bg-color-gradient font-sentient">
      <nav className="container mx-auto flex justify-between items-center h-16">
        <div className="flex items-center">
          <FaBars className="text-xl mr-4 cursor-pointer" />
        </div>
        <ul className="flex items-center h-16 space-x-8 text-brand-teal">
          {NAV_LINKS.map((link) => (
            <li key={link.link} className="text-sm md:text-md lg:text-xl">
              {link.logo ? (
                <NavLink to={link.link}>
                  <img src={logo} alt={link.alt} className="h-8 w-8" />
                </NavLink>
              ) : (
                <NavLink
                  to={link.link}
                  className={`${
                    location.pathname === link.link
                      ? 'text-black border-b-2 border-black font-bold'
                      : 'text-brand-teal hover:text-black transition duration-300 ease-in-out'
                  } relative pb-1`}
                >
                  {link.title}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
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
        <div className="flex items-center space-x-4">
          <FaSearch className="text-xl cursor-pointer" />
          <div className="relative">
            <FaShoppingCart
              className="text-xl cursor-pointer"
              onClick={() => toggleCart(!isCartOpen)}
            />
            {/* Display cart items count */}
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-black rounded-full px-2 text-xs">
                {cartItems.length}
              </span>
            )}
            {/* Display cart items */}
            {isCartOpen && <Cart isOpen={isCartOpen} toggleCart={toggleCart} />}
          </div>
          <div className="relative">
            <FaHeart
              className="text-xl cursor-pointer"
              onClick={() => toggleFavorite(!isFavoriteOpen)}
            />
            {/* Display favorites count */}
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-black rounded-full px-2 text-xs">
                {favorites.length}
              </span>
            )}
            {/* Display favorites */}
            {isFavoriteOpen && (
              <Favorites
                isOpen={isFavoriteOpen}
                toggleFavorite={toggleFavorite}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
