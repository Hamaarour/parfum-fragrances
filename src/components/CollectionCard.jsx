import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'

const CollectionCard = ({ collection }) => {
  const navigate = useNavigate()
  const cardRef = useRef(null)

  // useEffect(() => {
  //   gsap.from(cardRef.current, {
  //     duration: 1,
  //     scale: 0.5,
  //     opacity: 0,
  //     ease: 'back',
  //   })
  // }, [])

  const handleBuyNow = () => {
    navigate(`/collection/${collection.id}`)
  }

  return (
    <div
      // ref={cardRef}
      className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200 bg-white"
    >
      <img
        className="w-full h-62 object-cover"
        src={collection.image[0]}
        alt={collection.name}
      />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-lg mb-2 ">{collection.name}</div>
        <p className="text-gray-700 text-lg font-semibold">
          {collection.price} DH
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <button
          className="w-full bg-green-600 hover:bg-green-800 text-white font-bold py-2 rounded transition duration-300 ease-in-out"
          onClick={handleBuyNow}
        >
          Acheter maintenant
        </button>
      </div>
    </div>
  )
}

export default CollectionCard
