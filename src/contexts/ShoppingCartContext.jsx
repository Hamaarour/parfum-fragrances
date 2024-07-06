import { createContext, useContext, useState } from 'react'

const ShoppingCartContext = createContext({})

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, volume, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.volume === volume
      )

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.volume === volume
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [
        ...prevItems,
        { ...product, volume, quantity, price: product.prices[volume] },
      ]
    })
  }

  const removeFromCart = (id, volume) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.volume === volume))
    )
  }

  const updateCartItemQuantity = (id, volume, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.volume === volume
          ? { ...item, quantity: quantity }
          : item
      )
    )
  }

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCart = () => useContext(ShoppingCartContext)
