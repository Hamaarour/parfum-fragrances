import { useState, useEffect } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { useFavorite } from '../contexts/FavoriteContext'

const ProductCard = ({ product }) => {
  const [selectedVolume, setSelectedVolume] = useState('2ml')
  const [price, setPrice] = useState(product.prices['2ml'])
  const { addToCart } = useShoppingCart()
  const { addToFavorite, removeFromFavorite, isFavorite } = useFavorite()
  const [quantities, setQuantities] = useState({
    '2ml': product.quantities['2ml'],
    '5ml': product.quantities['5ml'],
    '10ml': product.quantities['10ml'],
  })
  const [purchaseQuantity, setPurchaseQuantity] = useState(1)
  const navigate = useNavigate()

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

  const handlePurchaseQuantityChange = (e) => {
    const value = Math.max(
      1,
      Math.min(e.target.value, quantities[selectedVolume])
    )
    setPurchaseQuantity(value)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVolume, purchaseQuantity)
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

  const handleToggleFavorite = () => {
    if (isFavorite(product.id)) {
      removeFromFavorite(product.id)
      toast.success(`${product.title} removed from favorites!`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      addToFavorite(product)
      toast.success(`${product.title} added to favorites!`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  const handleProductClick = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <div className="border p-4 relative rounded-lg shadow-md transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      <div
        className="relative h-60 cursor-pointer"
        // onClick={handleProductClick}
        onDoubleClick={handleToggleFavorite}
      >
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${product.images[0]})` }}
        />
        <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleProductClick}
            className="bg-white bg-opacity-75 text-black text-lg font-bold py-2 px-4 rounded-lg focus:outline-none hover:bg-opacity-100"
          >
            Show Product
          </button>
        </div>
        <button
          onClick={handleToggleFavorite}
          className="absolute top-2 right-2 text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none"
        >
          {isFavorite(product.id) ? (
            <AiFillHeart className="text-red-500 animate-ping-once" />
          ) : (
            <AiOutlineHeart className="text-gray-500" />
          )}
        </button>
        {quantities[selectedVolume] === 0 && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-400 bg-opacity-75 flex justify-center items-center text-white text-2xl font-bold">
            Stock Out
          </div>
        )}
      </div>
      <h2 className="font-sentient text-md font-bold mb-4 mt-4 min-h-10">
        {product.title}
      </h2>
      <div className="flex gap-2 mb-2">
        {Object.keys(product.prices).map((volume) => (
          <button
            key={volume}
            onClick={() => handleVolumeClick(volume)}
            className={`px-2 py-1 border rounded ${
              quantities[volume] === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : selectedVolume === volume
                ? 'bg-green-500'
                : 'bg-gray-100'
            }`}
            disabled={quantities[volume] === 0}
          >
            {volume} ({quantities[volume]})
          </button>
        ))}
      </div>
      <div className="flex justify-end items-end mb-2">
        {quantities[selectedVolume] === 0 ? (
          <p className="text-red-500 text-sm">Out of stock</p>
        ) : (
          <input
            type="number"
            value={purchaseQuantity}
            onChange={handlePurchaseQuantityChange}
            min="1"
            max={quantities[selectedVolume]}
            className="w-16 p-1 border rounded text-center text-black focus:outline-none focus:ring-0"
          />
        )}
      </div>
      <div className="flex justify-between items-center">
        <p className="font-sentient font-bold text-md w-1/3">
          {price ? price.toFixed(2) : 'Select volume'} DH
        </p>
        <button
          className="bg-green-500 text-white w-1/2 px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-green-700 hover:shadow-md "
          disabled={quantities[selectedVolume] === 0}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
