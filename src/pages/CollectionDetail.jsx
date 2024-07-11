import React from 'react'
import { useParams } from 'react-router-dom'
import { COLLECTIONS } from '../utils/constant'
import ItemNotFound from '../components/ItemNotFound'
import { Magnifier } from 'react-zoom-pan-pinch' // Adjust the import to match the correct export name

const CollectionDetail = () => {
  const { collectionId } = useParams()
  const collection = COLLECTIONS.find((c) => c.id === parseInt(collectionId))

  if (!collection) return <ItemNotFound item="Collection" />

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 relative">
          <Magnifier
            imageSrc={collection.image[0]}
            className="image-magnifier"
            zoomFactor={2}
            mgWidth={200}
            mgHeight={200}
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold text-gray-800">
            {collection.name}
          </h1>
          <p className="text-lg text-gray-700 mt-2">{collection.description}</p>
          <p className="text-2xl font-bold text-gray-800 mt-4">
            {collection.price} DH
          </p>
          <button className="btn mt-4">Ajouter au panier</button>
        </div>
      </div>
    </div>
  )
}

export default CollectionDetail
