import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../utils/constant'
import logo from '../assets/logo/logo_circle_white.png'
import { FaBars, FaTimes, FaShoppingCart, FaHeart } from 'react-icons/fa'
import Cart from './Cart'
import Favorites from './Favorites'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { useFavorite } from '../contexts/FavoriteContext'
import TopBanner from './TopBanner'
import { gsap } from 'gsap'

const Header = () => {
  const location = useLocation()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems } = useShoppingCart()
  const { favorites } = useFavorite()
  const mobileMenuRef = useRef(null)
  const linkRefs = useRef([]) // Store refs for each link

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        duration: 0.5,
        x: 0,
        opacity: 1,
        ease: 'power3.inOut',
      })
    } else {
      gsap.to(mobileMenuRef.current, {
        duration: 0.5,
        x: '-100%',
        opacity: 0,
        ease: 'power3.inOut',
      })
    }
  }, [isMenuOpen])

  // Animation for hover effect
  useEffect(() => {
    linkRefs.current.forEach((link, index) => {
      if (link) {
        const hoverAnimation = gsap.timeline({ paused: true })
        hoverAnimation.to(link, {
          scale: 1.1,
          duration: 0.3,
          ease: 'power3.out',
        })

        // Adding event listeners for hover
        link.addEventListener('mouseenter', () => hoverAnimation.play())
        link.addEventListener('mouseleave', () => hoverAnimation.reverse())
      }
    })
  }, [linkRefs])

  const toggleCart = (open) => {
    setIsCartOpen(open)
  }

  const toggleFavorite = (open) => {
    setIsFavoriteOpen(open)
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)
  }

  return (
    <header className="relative top-0 left-0 w-full z-50 text-neutral font-sentient bg-banner-bg bg-cover shadow-md shadow-white">
      {/* Top Banner */}
      <TopBanner />

      {/* Navigation */}
      <nav className="container mx-auto flex justify-between items-center h-16 px-4 lg:px-0">
        {/* Mobile Menu Icon */}
        <div className="flex items-center lg:hidden">
          {isMenuOpen ? (
            <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-10 w-10 lg:h-20 lg:w-20" />
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center h-16 space-x-4 lg:space-x-8 text-brand-teal">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.link}
              className="text-sm md:text-md lg:text-lg relative pb-1"
              ref={(el) => (linkRefs.current[index] = el)} // Attach ref for each link
            >
              <NavLink
                to={link.link}
                className={`${
                  location.pathname === link.link
                    ? 'text-white border-b-2 border-white font-bold'
                    : 'text-brand-teal hover:text-white transition duration-300 ease-in-out'
                }`}
              >
                {link.title}
                {/* Underline Effect */}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    location.pathname === link.link
                      ? 'scale-x-100'
                      : 'scale-x-0'
                  }`}
                ></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Cart and Favorite Icons */}
        <div className="flex items-center space-x-4">
          <div
            className="relative flex items-center p-2 cursor-pointer border-[1px] text-black bg-gray-100 hover:bg-gray-400 transition duration-300 ease-in-out"
            onClick={() => toggleCart(!isCartOpen)}
          >
            <FaShoppingCart className="text-xl" />
            <span className="ml-2 hidden sm:inline">{calculateTotal()} DH</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                {cartItems.length}
              </span>
            )}
            {isCartOpen && <Cart isOpen={isCartOpen} toggleCart={toggleCart} />}
          </div>

          <div className="relative cursor-pointer">
            <FaHeart
              className="text-xl pr-2"
              onClick={() => toggleFavorite(!isFavoriteOpen)}
              size={26}
            />
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                {favorites.length}
              </span>
            )}
            {isFavoriteOpen && (
              <Favorites
                isOpen={isFavoriteOpen}
                toggleFavorite={toggleFavorite}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="absolute top-16 left-0 w-full bg-gray-800 p-4 flex flex-col space-y-4 lg:hidden"
          style={{ transform: 'translateX(-100%)', opacity: 0 }}
        >
          <button className="text-white self-end" onClick={toggleMenu}>
            Close
          </button>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.link}
              to={link.link}
              onClick={toggleMenu}
              className={`${
                location.pathname === link.link
                  ? 'text-white border-b-2 border-white font-bold'
                  : 'text-brand-teal hover:text-white transition duration-300 ease-in-out'
              } pb-1 text-lg`}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
