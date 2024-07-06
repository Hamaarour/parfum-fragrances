// Favorites.jsx
import React, { useRef, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useFavorite } from '../contexts/FavoriteContext'
import { gsap } from 'gsap'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Favorites = ({ isOpen, toggleFavorite }) => {
  const favoriteRef = useRef(null)
  const { favorites, removeFromFavorite, getFavoriteProduct } = useFavorite()

  useEffect(() => {
    if (isOpen && favoriteRef.current) {
      gsap.fromTo(
        favoriteRef.current,
        { x: '-100%' },
        { x: '0%', duration: 0.5 }
      )
    } else if (!isOpen && favoriteRef.current) {
      gsap.to(favoriteRef.current, {
        x: '-100%',
        duration: 0.5,
        onComplete: () => toggleFavorite(false),
      })
    }
  }, [isOpen, toggleFavorite])

  const handleRemoveFromFavorite = (productId) => {
    const product = getFavoriteProduct(productId) // Fetch product details
    removeFromFavorite(productId)
    // Display toast notification
    toast.success(`Removed ${product.title} from favorites`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <div
      ref={favoriteRef}
      className={`fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto text-black ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-black">Favorites</h2>
        <FaTimes
          onClick={() => toggleFavorite(false)}
          className="text-red-500 text-xl cursor-pointer"
        />
      </div>
      {favorites.length === 0 ? (
        <p className="text-sm text-gray-600">No favorites added yet.</p>
      ) : (
        favorites.map((product) => (
          <div key={product.id} className="flex items-center mb-4 p-2 border-b">
            <img
              src={product.image}
              alt={product.title}
              className="w-12 h-12 object-cover rounded mr-2"
            />
            <p className="text-sm font-medium">{product.title}</p>
            <button
              className="text-red-500 text-xs ml-auto"
              onClick={() => handleRemoveFromFavorite(product.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Favorites
