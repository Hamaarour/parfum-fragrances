import React, { useState, useEffect } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const ProductCard = ({ product }) => {
  const [selectedVolume, setSelectedVolume] = useState('2ml')
  const [price, setPrice] = useState(product.prices['2ml'])
  const [isFavorite, setIsFavorite] = useState(false)
  const [quantities, setQuantities] = useState({
    '2ml': product.quantities['2ml'],
    '5ml': product.quantities['5ml'],
    '10ml': product.quantities['10ml'],
  })
  const [purchaseQuantity, setPurchaseQuantity] = useState(1)
  const { addToCart } = useShoppingCart()

  useEffect(() => {
    if (selectedVolume) {
      setPrice(product.prices[selectedVolume])
    }
  }, [selectedVolume, product.prices])

  const handleVolumeClick = (volume) => {
    if (quantities[volume] > 0) {
      setSelectedVolume(volume)
      setPurchaseQuantity(1)
    }
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handleDoubleClick = () => {
    setIsFavorite(!isFavorite)
  }

  const handlePurchaseQuantityChange = (e) => {
    const value = Math.max(
      1,
      Math.min(e.target.value, quantities[selectedVolume])
    )
    setPurchaseQuantity(value)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVolume, purchaseQuantity)
    console.log('Product added to cart:', product.title)
    toast.success(`${product.title} added to cart!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <div className="border p-4 relative rounded-lg shadow-md transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      <div className="relative h-60" onDoubleClick={handleDoubleClick}>
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none"
        >
          {isFavorite ? (
            <AiFillHeart className="text-red-500 animate-ping-once" />
          ) : (
            <AiOutlineHeart className="text-gray-500" />
          )}
        </button>
        {quantities[selectedVolume] === 0 && (
          <div className="absolute top-0 left-0 w-full h-full bg-red-600 bg-opacity-75 flex justify-center items-center text-white text-2xl font-bold">
            Stock Out
          </div>
        )}
      </div>
      <h2 className="font-sentient text-lg font-bold mb-2">{product.title}</h2>
      <div className="flex gap-2 mb-2">
        {Object.keys(product.prices).map((volume) => (
          <button
            key={volume}
            onClick={() => handleVolumeClick(volume)}
            className={`px-2 py-1 border rounded ${
              quantities[volume] === 0
                ? 'bg-red-300 cursor-not-allowed'
                : selectedVolume === volume
                ? 'bg-green-300'
                : 'bg-gray-100'
            }`}
            disabled={quantities[volume] === 0}
          >
            {volume} ({quantities[volume]})
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="font-sentient font-bold text-md">
          {price ? price.toFixed(2) : 'Select volume'} DH
        </p>
        <input
          type="number"
          value={purchaseQuantity}
          onChange={handlePurchaseQuantityChange}
          min="1"
          max={quantities[selectedVolume]}
          className="w-16 p-1 border rounded text-center"
        />
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-green-700 hover:shadow-md w-full"
        disabled={quantities[selectedVolume] === 0}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
