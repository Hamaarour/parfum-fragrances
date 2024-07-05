import { useState, useEffect } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const ProductCard = ({ product }) => {
  const [selectedVolume, setSelectedVolume] = useState('2ml') // Initialize to '2ml'
  const [price, setPrice] = useState(product.prices['2ml']) // Initialize price for '2ml'
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    // Update price whenever selectedVolume changes
    if (selectedVolume) {
      setPrice(product.prices[selectedVolume])
    }
  }, [selectedVolume, product.prices])

  const handleVolumeClick = (volume) => {
    setSelectedVolume(volume)
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="border p-4 relative rounded-lg shadow-md transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      <div className="relative h-60 overflow-hidden ">
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
      </div>
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <div className="flex gap-2 mb-2">
        {Object.keys(product.prices).map((volume) => (
          <button
            key={volume}
            onClick={() => handleVolumeClick(volume)}
            className={`px-2 py-1 border rounded ${
              selectedVolume === volume ? 'bg-green-300' : 'bg-gray-100'
            }`}
          >
            {volume}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-10">
        <p className="mb-2 font-sentient font-bold text-md">
          {price ? price.toFixed(2) : 'Select volume'} DH
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-green-700 hover:shadow-md">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
