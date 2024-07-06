// FavoriteContext.jsx
import React, { createContext, useContext, useState } from 'react'

const FavoriteContext = createContext()

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const addToFavorite = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product])
  }

  const removeFromFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((product) => product.id !== productId)
    )
  }

  const isFavorite = (productId) => {
    return favorites.some((product) => product.id === productId)
  }

  const getFavoriteProduct = (productId) => {
    // Replace this with actual logic to fetch product details by ID
    return favorites.find((product) => product.id === productId)
  }

  const value = {
    favorites,
    addToFavorite,
    removeFromFavorite,
    isFavorite,
    getFavoriteProduct,
  }

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  )
}

export const useFavorite = () => {
  const context = useContext(FavoriteContext)
  if (!context) {
    throw new Error('useFavorite must be used within a FavoriteProvider')
  }
  return context
}
