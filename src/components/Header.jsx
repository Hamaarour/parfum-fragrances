import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../utils/constant'
import logo from '../assets/react.svg'
import { FaBars, FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { gsap } from 'gsap'

const Header = () => {
  const location = useLocation()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartRef = useRef(null) // Ensure useRef is initialized with null

  const { cartItems, removeFromCart, updateCartItemQuantity } =
    useShoppingCart()

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (isCartOpen && cartRef.current) {
      gsap.fromTo(cartRef.current, { x: '100%' }, { x: '0%', duration: 0.5 })
    } else if (!isCartOpen && cartRef.current) {
      gsap.to(cartRef.current, {
        x: '100%',
        duration: 0.5,
        onComplete: () => setIsCartOpen(false),
      })
    }
  }, [isCartOpen])

  const handleRemoveItem = (id, volume) => {
    removeFromCart(id, volume)
  }

  const handleUpdateQuantity = (id, volume, quantity) => {
    updateCartItemQuantity(id, volume, quantity)
  }

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-neutral bg-color-gradient">
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
        <div className="flex items-center space-x-4">
          <FaSearch className="text-xl cursor-pointer" />
          <div className="relative">
            <FaShoppingCart
              className="text-xl cursor-pointer"
              onClick={toggleCart}
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-black rounded-full px-2 text-xs">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </nav>
      {isCartOpen && (
        <div
          ref={cartRef}
          className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-black">Shopping Cart</h2>
            <FaTimes
              onClick={toggleCart}
              className="text-red-500 text-xl cursor-pointer"
            />
          </div>
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.volume}`}
              className="flex items-center justify-between mb-4 p-2 border-b"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 object-cover rounded"
              />
              <div className="flex flex-col justify-between text-black">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs">{item.volume}</p>
                <p className="text-sm font-semibold">
                  {item.price.toFixed(2)} DH
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleUpdateQuantity(
                        item.id,
                        item.volume,
                        Number(e.target.value)
                      )
                    }
                    min="1"
                    max={item.quantity}
                    className="w-16 p-1 border rounded text-center"
                  />
                  <button
                    className="text-red-500 text-xs"
                    onClick={() => handleRemoveItem(item.id, item.volume)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="bg-green-500 text-black px-4 py-2 rounded w-full mt-4">
            Checkout
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
