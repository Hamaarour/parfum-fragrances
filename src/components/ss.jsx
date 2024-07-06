import React, { useState, useEffect } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
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
      <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
      <p className="text-gray-500 mt-2">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <div>
          <span className="text-xl font-bold">{price.toFixed(2)} DH</span>
        </div>
        <div>
          <label className="mr-2">Quantity:</label>
          <input
            type="number"
            value={purchaseQuantity}
            onChange={handlePurchaseQuantityChange}
            min="1"
            max={quantities[selectedVolume]}
            className="w-16 p-1 border rounded text-center"
          />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        {['2ml', '5ml', '10ml'].map((volume) => (
          <button
            key={volume}
            onClick={() => handleVolumeClick(volume)}
            className={`px-3 py-1 rounded ${
              selectedVolume === volume
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {volume}
          </button>
        ))}
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
