// Cart.js
import React, { useRef, useEffect } from 'react'
import { FaTimes, FaShoppingCart } from 'react-icons/fa'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { gsap } from 'gsap'

const Cart = ({ isOpen, toggleCart }) => {
  const cartRef = useRef(null)
  const { cartItems, removeFromCart, updateCartItemQuantity } =
    useShoppingCart()

  useEffect(() => {
    if (isOpen && cartRef.current) {
      gsap.fromTo(cartRef.current, { x: '100%' }, { x: '0%', duration: 0.5 })
    } else if (!isOpen && cartRef.current) {
      gsap.to(cartRef.current, {
        x: '100%',
        duration: 0.5,
        onComplete: () => toggleCart(false),
      })
    }
  }, [isOpen, toggleCart])

  const handleRemoveItem = (id, volume) => {
    removeFromCart(id, volume)
  }

  const handleUpdateQuantity = (id, volume, quantity) => {
    updateCartItemQuantity(id, volume, quantity)
  }

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)
  }

  return (
    <div
      ref={cartRef}
      className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto  ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-lg font-sentient font-bold text-green-500 uppercase">
          Shopping Cart
        </h2>
        <FaTimes
          onClick={() => toggleCart(false)}
          className="text-red-500 text-xl cursor-pointer"
        />
      </div>
      {cartItems.map((item) => (
        <div
          key={`${item.id}-${item.volume}`}
          className="flex items-center justify-between mb-4 p-2 border-b"
        >
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-32 object-cover rounded"
          />
          <div className="flex flex-col justify-between text-black">
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-xs">{item.volume}</p>
            <p className="text-sm font-semibold">{item.price.toFixed(2)} DH</p>
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
      <div className="text-black text-lg font-bold mb-4">
        Total: {calculateTotal()} DH
      </div>
      <button className="bg-green-500 text-black px-4 py-2 rounded w-full mt-4">
        Checkout
      </button>
    </div>
  )
}

export default Cart
