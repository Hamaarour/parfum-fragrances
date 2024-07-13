import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const CollectionCard = ({ collection }) => {
  const navigate = useNavigate()

  const handleBuyNow = () => {
    navigate(`/collection/${collection.id}`)
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200 bg-white">
      <img
        className="w-full h-62 object-cover"
        src={collection.image[0]}
        alt={collection.name}
      />
      <div className="px-6 py-4 text-center flex flex-col justify-center items-center">
        <h4 className="font-bold text-md mb-2 min-h-12">{collection.name}</h4>
        <p className="text-gray-700 text-lg font-semibold">
          {collection.price} DH
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <button
          className="w-full bg-green-600 hover:bg-green-800 text-white font-bold py-2 rounded transition duration-300 ease-in-out flex justify-center items-center focus:outline-none"
          onClick={handleBuyNow}
        >
          <FaShoppingCart className="inline-block mr-2" />
          Acheter maintenant
        </button>
      </div>
    </div>
  )
}

export default CollectionCard
