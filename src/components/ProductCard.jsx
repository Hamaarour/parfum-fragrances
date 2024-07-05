import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const ProductCard = ({ product }) => {
  const [selectedVolume, setSelectedVolume] = useState(null)
  const [price, setPrice] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleVolumeClick = (volume) => {
    setSelectedVolume(volume)
    setPrice(product.prices[volume])
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="border rounded-lg p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-32 object-cover mb-2"
      />
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <button onClick={toggleFavorite}>
          {isFavorite ? (
            <AiFillHeart className="text-red-500" />
          ) : (
            <AiOutlineHeart />
          )}
        </button>
      </div>
      <div className="flex gap-2 mb-2">
        {Object.keys(product.prices).map((volume) => (
          <button
            key={volume}
            onClick={() => handleVolumeClick(volume)}
            className={`px-2 py-1 border rounded ${
              selectedVolume === volume ? 'bg-gray-300' : 'bg-gray-100'
            }`}
          >
            {volume}
          </button>
        ))}
      </div>
      <p className="mb-2">
        Price: ${price ? price.toFixed(2) : 'Select volume'}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
